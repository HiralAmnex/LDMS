from django.db import models

# Create your models here.
class MFM_data(models.Model):
    srno = models.BigAutoField(primary_key=True, unique=True)
    substationid = models.TextField(max_length=255)
    feederid =  models.TextField(max_length=255)
    feedername =  models.TextField(max_length=255)
    feedercode =  models.TextField(max_length=255)
    received_datetime = models.DateTimeField()
    feedertypeid =  models.TextField(max_length=255)
    feedervoltageid = models.TextField(max_length=255)
    feederlocationid =models.TextField(max_length=255)
    feedercategoryid =models.TextField(max_length=255)
    voltage_brphase =models.TextField(max_length=255,null=True, blank=True)
    voltage_bphase =models.TextField(max_length=255,null=True, blank=True)
    voltage_ryphase =models.TextField(max_length=255,null=True, blank=True)
    voltage_rphase =models.TextField(max_length=255,null=True, blank=True)
    voltage_ybphase =models.TextField(max_length=255,null=True, blank=True)
    voltage_yphase =models.TextField(max_length=255,null=True, blank=True)
    current_bphase =models.TextField(max_length=255,null=True, blank=True)
    current_rphase =models.TextField(max_length=255,null=True, blank=True)
    current_yphase =models.TextField(max_length=255,null=True, blank=True)
    frequency =models.TextField(max_length=255,null=True, blank=True)
    powerfactor =models.TextField(max_length=255,null=True, blank=True)
    active_power =models.TextField(max_length=255,null=True, blank=True)
    apparent_power =models.TextField(max_length=255,null=True, blank=True)
    active_export =models.TextField(max_length=255,null=True, blank=True)
    active_import =models.TextField(max_length=255,null=True, blank=True)
    reactive_export =models.TextField(max_length=255,null=True, blank=True)
    reactive_import =models.TextField(max_length=255,null=True, blank=True)
    reactive_power =models.TextField(max_length=255,null=True, blank=True)
    lastupdateddatetime =models.DateTimeField()
    systeminsertdatetime =models.TextField(max_length=255,null=True, blank=True)
    oil_temprature =models.TextField(max_length=255,null=True, blank=True)
    tap_position =models.TextField(max_length=255,null=True, blank=True)
    winding_temprature =models.TextField(max_length=255,null=True, blank=True)
    feederiddigit =models.TextField(max_length=255,null=True, blank=True)


    def __str__(self):
        return self.feedername

    class Meta:
        db_table = "MFM_data"



class Event_data(models.Model):
    srno = models.BigAutoField(primary_key=True, unique=True)
    substationid = models.TextField(max_length=255)
    feederid =  models.TextField(max_length=255)
    feedername =  models.TextField(max_length=255)
    feedercode =  models.TextField(max_length=255)
    received_datetime = models.DateTimeField()
    parameter =models.TextField(max_length=255,null=True, blank=True)
    parameter_value =models.TextField(max_length=255,null=True, blank=True)
    lastupdateddatetime =models.DateTimeField()
    systeminsertdatetime =models.TextField(max_length=255,null=True, blank=True)
    feederiddigit =models.TextField(max_length=255,null=True, blank=True)
    acknowledge =models.BooleanField(default=False)


    def __str__(self):
        return self.feedername

    class Meta:
        db_table = "Event_data"