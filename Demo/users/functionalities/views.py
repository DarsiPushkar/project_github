from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from .models import User


# Create your views here.
@csrf_exempt
@api_view(['POST'])
def user_register(request):
    """API ENDPOINT TO REGISTER USER"""
    try:
        data=request.data 
        #Validate required fields
        required_fields = ['first_name','last_name','email','password']
        for field in required_fields:
            if field not in data:
                return Response({'error':  f'Missing required field: {field}'}, status=status.HTTP_400_BAD_REQUEST)
            
        #check if email already exists
        email=data.get('email')
        if User.objects(email=email).first():
            return Response({"error":"email already exists"})

        student = User(
            first_name = data['first_name'],
            last_name = data['last_name'],
            email = data['email'],
            phone = data.get('phone',''),
            password = data['password']

        )     
        student.save()
        return Response({
            "message" : "user registered successfully",
            "user":{
                "first_name":student.first_name,
                "last_name":student.last_name,
                "email":student.email,
                "phone":student.phone,
                "password":student.password
            }
            
        },status=status.HTTP_201_CREATED)  

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



@csrf_exempt
@api_view(['POST'])
def user_login(request):
    data=request.data 

    #check if both email and password are given

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return Response(
            {"error": "email and password are reguired"},
            status=status.HTTP_400_BAD_REQUEST
            )
    
    #check if user with email exists 
    user=User.objects(email=email).first()
    
    if user:
        if user.password == password:
            return Response({
                "Message":"login successful",
                "user":{
                "first_name":user.first_name,
                "last_name":user.last_name,
                "email":user.email,
                "phone":user.phone,
                "password":user.password
            }
                },
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"message":"password not matched"},
                status=status.HTTP_400_BAD_REQUEST
            )
    else:
        return Response(
            {"error":"No account found. Please register first."},
            status=status.HTTP_404_NOT_FOUND
        )

