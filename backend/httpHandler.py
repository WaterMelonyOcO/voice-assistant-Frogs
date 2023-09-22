from http.server import BaseHTTPRequestHandler
import cgi
from neiron.main import neuronGetText
from os.path import abspath, join


class voiceHttpHandler(BaseHTTPRequestHandler):

    # определяем метод `do_GET` 
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'Hello, world!')

    # определяем метод `do_POST` 
    def do_POST(self):        
        r, info, fileName = self.deal_post_data()
        audio_path = abspath('./tmp')
        print(r, info, "by: ", self.client_address)

        neiton_result = neuronGetText(join(audio_path, fileName))

        self.send_response(200)
        self.send_header("Content-type", "text/html")
        # self.send_header("Content-Length", str(length))
        self.end_headers()
        self.wfile.write(neiton_result.encode())
        # if f:
        #     self.copyfile(f, self.wfile)
        #     f.close()      

    def deal_post_data(self):
        ctype, pdict = cgi.parse_header(self.headers['Content-Type'])
        pdict['boundary'] = bytes(pdict['boundary'], "utf-8")
        pdict['CONTENT-LENGTH'] = int(self.headers['Content-Length'])
        if ctype == 'multipart/form-data':
            form = cgi.FieldStorage( fp=self.rfile, headers=self.headers, environ={'REQUEST_METHOD':'POST', 'CONTENT_TYPE':self.headers['Content-Type'], })
            print (type(form))
            try:
               
                open("./tmp/%s"%form["file"].filename, "wb").write(form["file"].file.read())
                fileName = form["file"].filename
            except IOError:
                    return (False, "Can't create file to write, do you have permission to write?", None)
        return (True, "Files uploaded", fileName)
