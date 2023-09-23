from http.server import BaseHTTPRequestHandler
from . import neuronApiHandler

class HttpHandler(BaseHTTPRequestHandler):

    # определяем метод `do_GET` 
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'Hello, world!')

    # определяем метод `do_POST` 
    def do_POST(self):        
        if ( self.path == "/api/neuron/"):
            neuronApiHandler.NeuronVoiceProcessor(self).returnNeuronAnswer()
        
        if ( self.path == "/api/"):
            pass
        

        else:
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write("no route here >:|".encode())
    
