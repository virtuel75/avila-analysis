from flask import Blueprint, render_template

bp = Blueprint('HomeRoute', __name__)

@bp.route('/', methods=['GET'])
def index():
    return render_template('base.html')