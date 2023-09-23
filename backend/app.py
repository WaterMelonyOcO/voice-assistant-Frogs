from http.server import BaseHTTPRequestHandler
from http.server import HTTPServer
import httpHandler

def run(server_class=HTTPServer, handler_class=BaseHTTPRequestHandler):
  server_address = ('', 4500)
  httpd = server_class(server_address, handler_class)
  try:
      httpd.serve_forever()
  except KeyboardInterrupt:
      httpd.server_close()

run(handler_class=httpHandler.voiceHttpHandler)