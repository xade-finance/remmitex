from requests import get as rget
#from json import loads as jloads
from flask import Flask
from bs4 import BeautifulSoup as bs
app = Flask(__name__)

URL = "https://coinmarketcap.com/currencies/celo/"

@app.route('/')
def index():
      response = rget(URL)
      content = response.content
      soup = bs(content,'lxml')
      divPrice = soup.find_all('div',class_ = "priceValue")
      currentPrice = divPrice[0].find('span').text.replace("$","")
      return currentPrice

if __name__ == '__main__':
      app.run('127.0.0.1',8004,debug=False)
