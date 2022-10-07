@include('partial.header', [$title])
    <main class="bg-light w-0.5">
        <section>
            <h3>Add student</h3>
            <p><a href="/">Go Back</a></p>
        
        </section>
        
        <section>
            <form action="/add/student" method="POST">
                @csrf
                
                <label for="">First Name</label>
                <input type="text" name="first_name" id="">
                @error('first_name')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Last Name</label>
                <input type="text" name="last_name" id="">

                @error('last_name')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Gender</label>
                <select name="gender" id=""> 
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                @error('gender')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Age</label>
                <input type="number" name="age" id="">

                @error('age')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Email</label>
                <input type="email" name="email" id="">     
                
                @error('email')
                    <p> {{$message}}</p>
                @enderror
            
                
                <button type="submit">Add New</button>
            </form>
        </section>
        
    </main>


@include('partial.footer')