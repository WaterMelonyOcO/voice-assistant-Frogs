from DB.DBController import DBController
import json

class DBApiHandler:
    
    def __init__(self, http) -> None:
        self.http = http
        self.DBCont = DBController()

    def GetProductViaNameHttp(self, productName = None):
        print(productName)
        if ( not productName ):
            self.http.send_response(403)
            self.http.send_header("Content-type", "text/html")
            self.http.end_headers()
            self.http.wfile.write("no data >:(".encode())
        
        queryResult = self.DBCont.GetProductViaName(productName)
        jsonResult = json.dumps(queryResult)

        self.http.send_response(200)
        self.http.send_header("Content-type", "application/json")
        self.http.end_headers()
        self.http.wfile.write(jsonResult.encode())
    
    def GetProductViaFiltersHttp( self, filers = {}):

        queryResult = self.DBCont.GetProductViaFilters(filers)
        jsonResult = json.dumps(queryResult)
        
        self.http.send_response(200)
        self.http.send_header("Content-type", "application/json")
        self.http.end_headers()
        self.http.wfile.write(jsonResult.encode())
    

    def GetProductViaCategoryHttp(self, CaegoryName = ''):
        if ( not CaegoryName ):
            self.http.send_response(403)
            self.http.send_header("Content-type", "text/html")
            self.http.end_headers()
            self.http.wfile.write("no data >:(".encode())
        
        queryResult = self.DBCont.GetProductViaCategory(CaegoryName)
        jsonResult = json.dumps(queryResult)

        self.http.send_response(200)
        self.http.send_header("Content-type", "application/json")
        self.http.end_headers()
        self.http.wfile.write(jsonResult.encode())
    
    def GetProductRequirementsHtpp(self, productId: int = None):
        if ( not productId ):
            self.http.send_response(403)
            self.http.send_header("Content-type", "text/html")
            self.http.end_headers()
            self.http.wfile.write("no data >:(".encode())
        
        queryResult = self.DBCont.GetProductRequirements(productId)
        jsonResult = json.dumps(queryResult)

        self.http.send_response(200)
        self.http.send_header("Content-type", "application/json")
        self.http.end_headers()
        self.http.wfile.write(jsonResult.encode())
