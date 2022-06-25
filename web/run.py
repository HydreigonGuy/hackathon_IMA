
from routes import app

port = 5005

def main():
    app.run(host="0.0.0.0", port=port)

if __name__ == "__main__":
    main()
