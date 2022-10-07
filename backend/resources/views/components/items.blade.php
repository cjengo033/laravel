@php  
    
@endphp

<ul class="navbar-nav">
  @auth
    <li class="nav-item">
        <form action="/logout" method="POST">
            @csrf
            <button type="submit">Logout</button>
        </form>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/add/student">Add Student</a>
    </li>

    <li class="nav-item">
      
      <a class="nav-link" href="/settings/student/{{$id = Auth::id()}}">Settings</a>
    </li>

  @else 
    <li class="nav-item active">
      <a class="nav-link" href="/login">Login</a>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="/register">Sign Up</a>
    </li>
      
  @endauth
  
</ul>