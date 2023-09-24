from http.server import BaseHTTPRequestHandler
from . import neuronApiHandler, dbApiHadler
import re
import cgi
import json
# from DB import DBController

class HttpHandler(BaseHTTPRequestHandler):

    # определяем метод `do_GET` 
    def do_GET(self):
        pass
        if (re.search( "/api/products/\d{1,3}", self.path)):
            productId = self.path.split("/")[-1]
            dbApiHadler.DBApiHandler(self).GetProductRequirementsHtpp(int(productId))

    # определяем метод `do_POST` 
    def do_POST(self):        
        if ( self.path == "/api/neuron/"):
            neuronApiHandler.NeuronVoiceProcessor(self).returnNeuronAnswer()
        
        if (re.search( "/api/products/", self.path)):
            ctype, _ = cgi.parse_header(self.headers.get("content-type"))
            if ( ctype == 'application/json' ):
                content_length = int(self.headers.get('Content-Length'))
                data = self.rfile.read(content_length)
                requestData = dict(json.loads(data))
   
                if ( requestData.get("name", None) ):
                    dbApiHadler.DBApiHandler(self).GetProductViaNameHttp(requestData["name"])

                elif ( requestData.get("category", None) ):
                    dbApiHadler.DBApiHandler(self).GetProductViaCategoryHttp(requestData["category"])
                
                elif ( requestData.get("fiters", None) ):
                    dbApiHadler.DBApiHandler(self).GetProductViaFiltersHttp(requestData['fiters'])
                
                else:
                    self.send_response(404)
                    self.send_header("Content-type", "text/html")
                    self.end_headers()
                    self.wfile.write("no data for you here >:|".encode())
    

        else:
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write("no route here >:|".encode())
    
