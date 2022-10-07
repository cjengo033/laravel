@if(session()->has('messsage'))
    <h1>{{session('message')}}</h1>
@endif