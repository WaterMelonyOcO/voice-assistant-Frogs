from http.server import HTTPServer
from api import HttpHandler

def run(server_class=HTTPServer, handler_class=""):
  server_address = ('', 4500)
  httpd = server_class(server_address, handler_class)
  try:
      httpd.serve_forever()
  except KeyboardInterrupt:
      httpd.server_close()


run(handler_class=HttpHandler)