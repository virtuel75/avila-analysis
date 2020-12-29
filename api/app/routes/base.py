from flask import Blueprint, redirect

bp = Blueprint('BaseRoute', __name__)

@bp.route('/', methods=['GET'])
def index():
    return redirect('/home')