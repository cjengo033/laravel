@include('partial.header');


    <section class="shadow-sm p-3 mb-5 bg-body rounded bg-light m-5">

        <h3 class="text-bold">Settings</h3>
        <form action="/settings/student/{{$User->id}}" method="POST">
            @csrf

            <div class="mb-3">
                <label for="">ID</label>
                 <input type="text"  class="form-control"value="{{$User->id}}" readonly>
            </div>

            <div class="mb-3">
                <label for="">Email</label>
                 <input type="text"  class="form-control"value="{{$User->email}}">
            </div>

            <div class="mb-3">
                <label for="">Name</label>
                <input type="text"  class="form-control" name="name" value="{{$User->name}}">
            </div>
            
            <div class="mb-3">
                <label for="">Old Password</label>
                <input type="password"  class="form-control" name="old_password" placeholder="Password">
            </div>
           
    
            <div class="mb-3">
                <label for="">New Password</label>
                <input type="password"  class="form-control" name="new_password" placeholder="Password">
            </div>
        
    
            <div class="mb-3">
                <label for="">Re-enter New</label>
                <input type="password"  class="form-control" name="confirm_new_password" placeholder="Password">
            </div>
           
            <button type="submit" class="form-control btn btn-primary">Update</button>
            <p><a href="/">Go back</a></p>
        </form>

    </section>
    


@include('partial.footer');