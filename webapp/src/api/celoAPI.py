from requests import get as rget
#from json import loads as jloads
from flask import Flask
from bs4 import BeautifulSoup as bs
app = Flask(__name__)

#API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=a7df6582-7a00-4861-a5dc-392c2ce54b79&start=92&limit=1"
URL = "https://coinmarketcap.com/currencies/celo/"

@app.route('/')
def index():
      response = rget(URL)
      content = response.content
      soup = bs(content,'lxml')
      divPrice = soup.find_all('div',class_ = "priceValue")
      #currentPrice = f'{jsonData["data"][0]["quote"]["USD"]["price"]}
      #currentPrice = divPrice.find()
      currentPrice = divPrice[0].find('span').text.replace("$","")
      return currentPrice

if __name__ == '__main__':
      app.run('127.0.0.1',8004,debug=False)
