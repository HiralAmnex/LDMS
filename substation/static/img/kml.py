import csv
import simplekml

inputfile = csv.reader(open('/home/amnex/LDMS/substation/static/img/Diagrama_unifilar00.kml','r'))
kml=simplekml.Kml()

for row in inputfile:
  kml.newpoint(name=row[0], coords=[(row[2],row[1])])

kml.save('battleplaces.kml')