from http.server import HTTPServer
import httpHandler

def run(handler_class, server_class=HTTPServer):
  server_address = ('', 4600)
  httpd = server_class(server_address, handler_class)
  try:
      httpd.serve_forever()
  except KeyboardInterrupt:
      httpd.server_close()


run()