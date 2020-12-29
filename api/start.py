from flask import Flask
import app

def start():
    # create the api
    api = Flask(__name__, static_url_path='/assets', static_folder='./assets', template_folder='./app/templates')

    # initilization
    app.initilize(api)

    # run
    api.run(debug=True)

if __name__ == '__main__':
    start()