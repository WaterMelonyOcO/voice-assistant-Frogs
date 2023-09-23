import cgi
from neiron import neuronGetText
from os.path import abspath, join
from http.server import BaseHTTPRequestHandler

class NeuronVoiceProcessor:

    def __init__(self, http: BaseHTTPRequestHandler) -> None:
        self.http = http
        self.audio_path = abspath('tmp')

    def returnNeuronAnswer(self):
        r, info, fileName = self.deal_post_data()
        print(self.audio_path, fileName)
        print(r, info, "by: ", self.http.client_address)

        neiton_result = neuronGetText(join(self.audio_path, fileName))

        self.http.send_response(200)
        self.http.send_header("Content-type", "text/html")
        # self.http.send_header("Content-Length", str(length))
        self.http.end_headers()
        self.http.wfile.write(neiton_result.encode())

    def deal_post_data(self):
        ctype, pdict = cgi.parse_header(self.http.headers['Content-Type'])
        pdict['boundary'] = bytes(pdict['boundary'], "utf-8")
        pdict['CONTENT-LENGTH'] = int(self.http.headers['Content-Length'])
        if ctype == 'multipart/form-data':
            form = cgi.FieldStorage( fp=self.http.rfile, headers=self.http.headers, environ={'REQUEST_METHOD':'POST', 'CONTENT_TYPE':self.http.headers['Content-Type'], })
            print (type(form))
            try:
               
                open(self.audio_path+"/%s"%form["file"].filename, "wb").write(form["file"].file.read())
                fileName = form["file"].filename
            except IOError:
                    return (False, "Can't create file to write, do you have permission to write?", None)
        return (True, "Files uploaded", fileName)