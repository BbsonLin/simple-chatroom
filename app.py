from flask import Flask, render_template

from flask_socketio import SocketIO, send, disconnect

app = Flask(__name__)
app.config['SECRET'] = 'my secret'
socketio = SocketIO(app)


@socketio.on('connect')
def on_connect():
    print('Connect...')


@socketio.on('disconnect')
def on_disconnect():
    print('Disconnect')
    disconnect()


@socketio.on('message')
def handle_message(msg):
    print('Message', msg)
    send(msg, broadcast=True)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    socketio.run(app, debug=True, use_reloader=True)
