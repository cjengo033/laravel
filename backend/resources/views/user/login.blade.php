@include('partial.header')


    <main class="bg-light w-0.5 shadow-sm p-3 mb-5 bg-white rounded m-5">
        
        <section class="shadow-sm p-3 mb-5 bg-white rounded">
            <h3>Login</h3>
            <form action="/login/process" method="POST">
                @csrf
                @error('email')
                     <p class="text-danger"> {{$message}}</p>
                @enderror
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" name="email" id="" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" name="password" id="" class="form-control">
                </div>
            
                 
                <button type="submit" class="btn btn-primary form-control">Login </button>
                <p><a href="/register">Need account? Sign up</a></p> 
            </form>
           
        </section>
        
    </main>
    

@include('partial.footer')

