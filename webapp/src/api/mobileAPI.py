from pymongo import MongoClient
from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def index():
    try:
        phone = str(request.args.get('phone'))
        if phone == None:
            return "'phone' parameter was not found"
        client = MongoClient('mongodb://localhost:27017/')
        database = client['xade']
        phones = database['phones']
        try:
            phoneDetails = phones.find_one({'Phone Number': str(phone)})
            uid = phoneDetails['ID']
            wallets = database['wallets']
            try:
                walletDetails = wallets.find_one({'ID': uid})
                return walletDetails['Wallet Address']
            except:
                return 'Wallet Address was not found'
        except:
            return 'Phone Number was not found'
    except:

        return "'phone' parameter was not specified"

if __name__ == '__main__':
    app.run('127.0.0.1', 8002)
