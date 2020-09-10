from django.urls import path, include
from .views import UserAPIView, CustomerAPIView, ProviderAPIView, ServicesAPIView, OrderAPIView, UserPost, CustomerPost, ProviderPost,CustomerRecordView,OrderPostApi,ProviderRecordView,ProviderShow
urlpatterns = [
    path('', UserAPIView.as_view()),
    path('customer/', CustomerAPIView.as_view()),
    path('provider/', ProviderShow.as_view()),
    path('service/', ServicesAPIView.as_view()),
    path('order/', OrderAPIView.as_view()),
    path('order/post', OrderPostApi.as_view()),
    path('post/', UserPost.as_view()),
    path('post/provider/', ProviderAPIView.as_view()),
    path('post/customer', CustomerRecordView.as_view()),
]
