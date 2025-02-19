from rest_framework import serializers
from substation.models import *  # replace MyModel with your actual model name

class MFMdataSerializer(serializers.ModelSerializer):
    feedername = serializers.CharField(allow_null=True)
    # received_datetime = serializers.DateTimeField()
    received_datetime = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    voltage_rphase = serializers.CharField(allow_null=True)
    voltage_yphase = serializers.CharField(allow_null=True)
    voltage_bphase = serializers.CharField(allow_null=True)
    voltage_ryphase = serializers.CharField(allow_null=True)
    voltage_ybphase = serializers.CharField(allow_null=True)
    voltage_brphase = serializers.CharField(allow_null=True)
    current_bphase = serializers.CharField(allow_null=True)
    current_rphase = serializers.CharField(allow_null=True)
    current_yphase = serializers.CharField(allow_null=True)
    frequency = serializers.CharField(allow_null=True)
    powerfactor = serializers.CharField(allow_null=True)
    active_power = serializers.CharField(allow_null=True)
    apparent_power = serializers.CharField(allow_null=True)
    active_export = serializers.CharField(allow_null=True)
    active_import = serializers.CharField(allow_null=True)
    reactive_export = serializers.CharField(allow_null=True)
    reactive_import = serializers.CharField(allow_null=True)
    reactive_power = serializers.CharField(allow_null=True)


    class Meta:
        model = MFM_data
        fields =  ['feedername', 'received_datetime','voltage_brphase','voltage_yphase','voltage_bphase','voltage_ryphase','voltage_rphase','voltage_ybphase','current_bphase','current_rphase','current_yphase','frequency','powerfactor','active_power','apparent_power','active_export','active_import','reactive_export','reactive_import','reactive_power']