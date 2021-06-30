<?php

namespace App\Http\Middleware;

use Closure;

class AuthLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //$login= AuthModel::all();
        if($request->age && $request->age<18){
            return redirect('accessDenied');
        }
        return $next($request); 
    }
}