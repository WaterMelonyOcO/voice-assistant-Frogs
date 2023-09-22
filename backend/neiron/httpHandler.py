from http.server import BaseHTTPRequestHandler
import neuro

class MyHttpHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.header("Content-type", "application/json")
        self.end_headers()

        userRequest = neuro.textVromVoice()