@include('partial.header')
@php $array = array("Title" => "Student System") @endphp

    <header class="">

        <a href="#">
            <x-nav :data="$array"/>
            <x-messages />
            <h1 class="text-center mt-5 text-light text-bold">Student List</h1>
        </a>
    </header>

    <section>
        <table class="table bg-light text-center">
            <thead>
                <tr class="p-2">
                    <th scope="col">Student ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            @foreach ($students as $student)
            <tbody>
                <tr>
                    <th>{{$student->id}}</th>
                    <th>{{$student->first_name}}</th>
                    <th>{{$student->last_name}}</th>
                    <th>{{$student->email}}</th>
                    <th>{{$student->age}}</th>
                    <th>{{$student->gender}}</th>
                    <th><a href="/student/{{$student->id}}">View</a></th>
                </tr>
            </tbody>
            @endforeach
        </table>
        {{$students->links()}}
    </section>
    
@include('partial.footer')

