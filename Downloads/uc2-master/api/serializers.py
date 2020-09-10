from rest_framework import serializers
from accounts.models import Customer, Services, Provider, User, Order






class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ('services',)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password','first_name','last_name')



class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('customerid', 'choice',)

class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ('user', 'choice',)
class CustomerSerializer(serializers.ModelSerializer):
    user=UserSerializer(required=True) 
    class Meta:
        model = Customer
        fields = ('user', 'phone_no',)
    def create(self, validated_data):
      
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        customerobj, created = Customer.objects.update_or_create(user=user,
                            phone_no=validated_data.pop('phone_no'))
        return customerobj
"""class ProviderSerializer(serializers.ModelSerializer):
    user=UserSerializer(required=True) 
    class Meta:
        model = Provider
        fields = ('user', )
    def create(self, validated_data):
      
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        providerobj, created = Provider.objects.update_or_create(user=user,
                            choice=validated_data.pop('choice'))
        return providerobj"""