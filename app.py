from flask import Flask, send_from_directory, jsonify
import joblib

app = Flask(__name__)

classifier_model = None

## Classifier fonctions
def load_model():
    """
    Load the classifier model
    """
    model_filename = 'model/model.sav'
    model = joblib.load(model_filename)
    return model


## Routes
@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    return send_from_directory('./web', path)

@app.route('/', methods=['GET'])
def index():
    """
    Load the web app
    """
    return send_from_directory('./web', 'index.html')

@app.route('/api/predict', methods=['POST'])
def predict():
    """
    Make prediction from input
    """
    if classifier_model is None:
        result = ('unknow', 0)
    else:
        #predictions = classifier_model.predict(x)
        #probability = classifier_model.predict_proba(x)

        #result = list(zip(predictions, [max(p) for p in probability]))[0]
        result = ('A', .9)
    
    return jsonify({ 'prediction': result[0], 'accuracy': result[1] })


## initialize attribute
classifier_model = load_model()


## start function
if __name__ == '__main__':
    app.run(debug=True)