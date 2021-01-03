from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS, cross_origin
import joblib

app = Flask(__name__)
cors = CORS(app)

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
    result = ('unknow', 0)
    data = request.form.get('inputs')

    if data:
        data = [float(x) for x in data.split(',')]
        print(data)

        if classifier_model is not None:
            predictions = classifier_model.predict(data)
            probability = classifier_model.predict_proba(data)

            result = list(zip(predictions, [max(p) for p in probability]))[0]
    
    return jsonify({ 'prediction': result[0], 'accuracy': result[1] })


## initialize attribute
classifier_model = load_model()


## start function
if __name__ == '__main__':
    app.run(debug=True)