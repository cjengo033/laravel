@include('partial.header', [$title])
    <main class="bg-light w-0.5">
        <section>
            <h3>Edit student</h3>
            <p><a href="/">Go back</a></p>
        
        </section>
        
        <section>
            <form action="/student/{{$student->id}}" method="POST">
                @method('PUT')
                @csrf
                <label for="">ID</label>
                <input type="text" value="{{$student->id}}"> <br>
                <label for="">First Name</label>
                <input type="text" name="first_name" id="" value="{{$student->first_name}}">
                @error('first_name')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Last Name</label>
                <input type="text" name="last_name" id="" value="{{$student->last_name}}">

                @error('last_name')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Gender</label>
                <select name="gender" id=""> 
                    <option value="" {{$student->gender == ""? 'selected' : ''}}></option>
                    <option value="Male" {{$student->gender == "Male"? 'selected' : ''}}>Male</option>
                    <option value="Female" {{$student->gender == "Female"? 'selected' : ''}}>Female</option>
                </select>

                @error('gender')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Age</label>
                <input type="number" name="age" id="" value="{{$student->age}}">

                @error('age')
                    <p> {{$message}}</p>
                @enderror

                <label for="">Email</label>
                <input type="email" name="email" id="" value="{{$student->email}}">     
                
                @error('email')
                    <p> {{$message}}</p>
                @enderror
            
                
                <button type="submit">Update</button>
               
            </form>
            <form action="/student/{{$student->id}}" method="post">
                @method('delete')
                @csrf
                <button type="submit">Delete </button>
            </form>
          
        </section>
        
    </main>


@include('partial.footer')