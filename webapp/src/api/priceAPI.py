from requests import get as rget
from flask import Flask
from bs4 import BeautifulSoup as bs
app = Flask(__name__)

@app.route("/")
def index():
      return """
      /btc for current price of Bitcoin
      <br>
      /celo for current price of Celo
      """

@app.route('/celo')
def celo():
      url = "https://coinmarketcap.com/currencies/celo/"
      response = rget(url)
      content = response.content
      soup = bs(content,'lxml')
      divPrice = soup.find_all('div',class_ = "priceValue")
      currentPrice = divPrice[0].find('span').text.replace("$","")
      return currentPrice

@app.route('/btc')
def btc():
      url = "https://coinmarketcap.com/currencies/bitcoin/"
      response = rget(url)
      content = response.content
      soup = bs(content,'lxml')
      divPrice = soup.find_all('div',class_ = "priceValue")
      currentPrice = divPrice[0].find('span').text.replace("$","")
      return currentPrice

if __name__ == '__main__':
      app.run('127.0.0.1',8004,debug=False)
