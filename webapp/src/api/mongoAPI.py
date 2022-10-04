from http.server import BaseHTTPRequestHandler, HTTPServer
from json import loads
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
database = client["xade"]
collection = database["users"]
wallets = database["wallets"]
phones = database["phones"]

class S(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
    def do_GET(self):
        self.send_response(301)
        self.send_header('Location','https://app.xade.finance')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers['Content-Length']) 
        post_data = self.rfile.read(content_length) 
        data = post_data.decode('utf-8')
        #if data.startswith("IP: "):
        #    i = open("./ips.log",'r')
        #    ip = open("./ips.log",'a')
        #    data = data.replace("IP: ","")
        #    if data not in i.readlines():
        #       ips.insert_one({"IP Address":data})
        #        ip.write(data+"\n")
        #    ip.close()
        #    i.close()
        if data.startswith("address:"):
            w = open("/home/xade/kinda-final-app/src/api/wallets.log",'r')
            addr = open("/home/xade/kinda-final-app/src/api/wallets.log",'a')
            z = data.split("||")
            adr = z[0].replace("address:","")
            i = z[1].replace("id:","")
            if adr not in w.read():
                x = wallets.insert_one({"Wallet Address":adr,"ID":i})
                addr.write(adr+" ")
            w.close()
            addr.close()

        elif data.startswith('{"phone":'):
            abcd = open("/home/xade/kinda-final-app/src/api/phones.log",'r')
            ph = open("/home/xade/kinda-final-app/src/api/phones.log",'a')
            p = loads(data)
            phn = p["phone"]
            i = p["id"]
            #a = i+'\n'
            if phn not in abcd.read():
                x = phones.insert_one({"Phone Number":phn,"ID":i})
                ph.write(phn+" ")
            abcd.close()
            ph.close()

    
        else:
            
            j = data.replace("'", "\"")
            d = loads(j)

            email = d["email"]
            name = d["name"]
            pfp = d["profileImage"]
            verify = d["verifier"]
            i = d["verifierId"]
            login = d["typeOfLogin"]
            ip = d["ip"]
            i = d["id"]
            if login == "jwt":
                login = "email"
            info2 = f"{email}\n"
            info3 = f"Email: {email} Login Type: {login}\n"
    
    
            fa = open('/home/xade/kinda-final-app/src/api/emails.log','a')
            fr = open('/home/xade/kinda-final-app/src/api/emails.log','r').read().split("\n")
            # fa2 = open('./logins.log','a')
            # fr2 = open('./logins.log','r').readlines()
    
            if info2 not in fr:
                fa.write(info2)
                fa.close()
    
    
                info = {
                    "Email":email,
                    "Username":name,
                    "Profile Picture URL":pfp,
                    "Verifier":verify,
                    "Verifier ID":i,
                    "Login Type":login,
                    "IP Address":ip,
                    "Primary Login":'Yes',
                    "ID":i
                }
    
                x = collection.insert_one(info)
            # elif info3 not in fr2:
            #         fa2.write(info3)
            #         fa2.close()
    
            #         info = {
            #             "Email":email,
            #             "Username":name,
            #             "Profile Picture URL":pfp,
            #             "Login Type":login,
            #             "IP Address":ip,
            #             "Primary Login":'No',
            #             "ID":i
            #         }
    
            #         x = collection.insert_one(info)
            else:
                info = "duplicate lol"

        #print(info)
        self._set_response()    
        self.wfile.write("{}".format(self.path).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=S, port=8000):
    # logging.basicConfig(level=logging.INFO)
    server_address = ('0.0.0.0', 8000)
    httpd = server_class(server_address, handler_class)
    print(f"Listening on 127.0.0.1:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    run()
