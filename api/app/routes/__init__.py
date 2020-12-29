from .home import bp as home_bp
from .base import bp as base_bp

def init(api):
    """
    Register blueprint
    """
    api.register_blueprint(base_bp)
    api.register_blueprint(home_bp, url_prefix='/home')