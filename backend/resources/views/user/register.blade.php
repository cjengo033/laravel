@include('partial.header')

<main class="bg-light w-0.5 shadow-sm p-3 mb-5 bg-white rounded m-5">
    <section>
        <h3>Register</h3>
    </section>
    
    <section class="shadow-sm p-3 mb-5 bg-white rounded"> 
        <form action="/store" method="POST">
            @csrf

            <div class="form-group">
                <label for="">Name</label>
                <input type="text" name="name" id="" class="form-control" value={{old('name')}} > 
                    @error('name')
                        <p class="text-danger">{{$message}}</p>
                    @enderror
            </div>
         
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" name="email" id="" class="form-control" value={{old('email')}}> 
                    @error('email')
                        <p class="text-danger">{{$message}} </p>
                    @enderror
            </div>

            <div class="form-group">
                <label for="">Password</label>
                <input type="password" name="password" class="form-control" id=""> 
                    @error('password')
                        <p class="text-danger">{{$message}} </p>
                    @enderror
            </div>
            <div class="form-group">
                <label for="">Confirm Password</label>
                <input type="password" name="confirm_password" class="form-control" id=""> 
            <div>
             
            <button type="submit" class="btn btn-primary form-control mt-4">Register</button>
            <p><a href="/login">Already have an account? login</a></p>
        </form>
    </section>
    
</main>

@include('partial.footer')

