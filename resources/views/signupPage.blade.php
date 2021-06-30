@extends('layout')
<div class="container">
        <div class="row m-5 justify-content-center">
            <div class="col-md-6">
                <h3 class="text-center text-light">Sign Up</h3>
                    <form action="loginDone" method="post" class="border border-info m-3 p-5 bg-dark text-light">
                    @csrf
                <div class="mb-3">
                    <label for="" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="firstname" required  >
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Last Name</label>
                    <input type="text" class="form-control" name="lastname" required  >
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Age</label>
                    <input type="text" class="form-control" name="age" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Phone</label>
                    <input type="text" class="form-control" name="phone" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">UserName</label>
                    <input type="text" class="form-control" name="username" required  >
                </div>
                <button type="submit" class="btn btn-block btn-success">Sign Up</button>
                </form>
            </div>
        </div>
    </div>