from http.server import BaseHTTPRequestHandler, HTTPServer
from json import loads
import smtplib 
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

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
		registered = open("/home/xade/web3auth/src/api/emails.log",'r')
		sent = open("/home/xade/web3auth/src/api/emailsSent.log",'a')
		sentRead = open("/home/xade/web3auth/src/api/emailsSent.log",'r')
		receiver = data.replace("email=","")
        #a = i+'\n'
		if receiver in registered.read().split("\n") and receiver not in sentRead.read().split("\n"):
			msg = MIMEMultipart()
			msg.set_unixfrom('author')
			msg['From'] = "XADE <development@xade.finance>"
			msg['To'] = f"<{	receiver}>"
			msg['Subject'] = "Welcome to XADE!"
			html = """
			Welcome!
			<br>
			<br>
			Thank you for registering to XADE.
			<br>
			<br>
			XADE is the one super solution to all your financial needs and you have won a free premium membership which will be given to you in form of an NFT!
			<br>
			<br>
			You are also eligible for a pilot run if you have registered with your mobile number and we will notify you if you have been selected and we will notify you about the same.
			<br>
			<br>
			Best,
			<br>
			Team XADE.
			"""
			message = MIMEText(html,'html')
			msg.attach(message)
			mail = smtplib.SMTP_SSL('smtpout.secureserver.net',465)
			mail.ehlo()
			dev = "development@xade.finance"
			passwd = "Commune_dev1"
			mail.login(dev,passwd)
			mail.sendmail(dev,receiver,msg.as_string())
			mail.quit()
			sent.write(receiver+"\n")
			sent.close()
		else:
			print("bruhh")
		sent.close()
		sentRead.close()
		registered.close()
		self._set_response()    
		self.wfile.write("{}".format(self.path).encode('utf-8'))


def run(server_class=HTTPServer, handler_class=S, port=8001):
    # logging.basicConfig(level=logging.INFO)
    server_address = ('0.0.0.0', 8001)
    httpd = server_class(server_address, handler_class)
    print(f"Listening on 127.0.0.1:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    run()