from django.shortcuts import render
from rest_framework import generics
from accounts.models import Customer, Provider, Services, User, Order
from .serializers import CustomerSerializer, ProviderSerializer, ServiceSerializer, UserSerializer, OrderSerializer


class CustomerAPIView(generics.ListAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class ProviderAPIView(generics.CreateAPIView):
    serializer_class = ProviderSerializer


class ServicesAPIView(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class = ServiceSerializer

class ProviderShow(generics.ListAPIView):
    queryset=Provider.objects.all()
    serializer_class=ProviderSerializer

class UserAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class OrderAPIView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderPostApi(generics.CreateAPIView):
    serializer_class=OrderSerializer

class UserPost(generics.CreateAPIView):
    serializer_class = UserSerializer


class CustomerPost(generics.CreateAPIView):
    serializer_class = CustomerSerializer


class ProviderPost(generics.CreateAPIView):
    serializer_class = ProviderSerializer
# Create your views here.
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class CustomerRecordView(APIView):
    
    def get(self, format=None):
       
        customerobj = Customer.objects.all()
        serializer = CustomerSerializer(customerobj, many=True)
        return Response(serializer.data)

    def post(self, request):
      
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)

class ProviderRecordView(APIView):
    
    def get(self, format=None):
       
        providers = Provider.objects.all()
        serializer = ProviderSerializer(providers, many=True)
        return Response(serializer.data)

    def post(self, request):
      
        serializer = ProviderSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages,
                        status=status.HTTP_400_BAD_REQUEST)
