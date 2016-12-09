import SimpleHTTPServer
import SocketServer
from os import curdir, sep

class MyRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):
        sendReply = False
        if self.path == '/':
            self.path = '/app'
        if ".png" in self.path:
            #If it's the image type, remove '/' at the end of the link
            self.path = self.path[:-1]
        return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)


Handler = MyRequestHandler
PORT = 3000
server = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port ", PORT
server.serve_forever()
