from requests import get as rget
from json import loads as jloads
from flask import Flask

app = Flask(__name__)

API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=API_KEY_HERE"

@app.route('/')
def index():
      response = rget(API_URL)
      jsonData = jloads(response.text)

      currentPrice = f'{jsonData["data"][0]["quote"]["USD"]["price"]}'

      return currentPrice

if __name__ == '__main__':
      app.run('127.0.0.1',8004,debug=False)
