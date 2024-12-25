## Laravel8.5

## 快速入门

> ### 简介

Laravel 是一个 Web 应用框架，有着表现力强、语法优雅的特点。 Web 框架为创建应用提供了一个结构和起点。你只需专注代码，我们为你处理细节。

Laravel 致力于提供出色的开发体验，同时提供强大的特性，例如完全的依赖注入，富有表现力的数据库抽象层，队列和计划任务，单元和集成测试等等。

无论你是刚刚接触 PHP 和 Web 框架的新人，亦或是有着多年经验的老手， Laravel 都是一个可以与你一同成长的框架。我们将帮助你迈出成为 Web 开发者的第一步，或是将你的经验提高到下一个等级。我们迫不及待的想看看你的作品。

> ### 安装

## 环境要求

```php
PHP >= 7.3
BCMath PHP 扩展
Ctype PHP 扩展
Fileinfo PHP 扩展
JSON PHP 扩展
Mbstring PHP 扩展
OpenSSL PHP 扩展
PDO PHP 扩展
Tokenizer PHP 扩展
XML PHP 扩展
```

## 通过Composer安装

如果你已经安装好composer，那么可以直接使用composer来创建一个新的项目。但是你的设备还没安装composer的，请参考本文档的Composer章节。那下面就是创建一个新的Laravel项目的指令。

```php
// 创建新的项目
composer create-project laravel/laravel example-app

// 进入项目目录
cd example-app

// 通过Artisan CLI的serve命令来启动Laravel的本地服务
php artisan serve
```

## 通过Laravel安装器

或者，你可以通过Laravel安装器作为全局Composer依赖

```php
// 全局安装Laravel安装器
composer global require laravel/installer

// 通过Laravel安装器
laravel new example-app

// 进入项目目录
cd example-app

// 通过Artisan CLI的serve命令来启动Laravel的本地服务
php artisan serve
```

> ### 配置

Laravel 框架的所有配置文件都存放在 config 目录下。

## 环境配置

基于应用运行的环境不同设置不同的配置值能够给我们开发带来极大的方便，比如，我们通常在本地和线上环境配置不同的缓存驱动，这一功能在 Laravel 中很容易实现。

Laravel 使用 PHP 扩展库 DotEnv 来实现这一功能，在新安装的 Laravel 中，根目录下有一个 .env.example 文件，如果 Laravel 是通过 Composer 安装的，那么该文件已经被重命名为 .env，否则的话你要自己手动重命名该文件。

Laravel 的默认.env 文件包含一些常用的配置值，这些配置值可能会根据您的应用程序是在本地运行还是在生产 Web 服务器上运行而有所不同。 在 Laravel 的 config 目录下，各种配置使用 env 函数检索.env 文件的这些配置值。

## 定义.ENV环境变量

```php
APP_NAME = "我的应用"
```

## 获取.ENV环境变量

```php
/**
 * 第一个参数 => 需要的参数名
 * 第二个参数 => 当没有找到对应环境变量时将返回的默认
*/
env('APP_DEBUG', false)
```

## Config配置

你可以通过config函数访问配置值

## 获取配置值

```php
$value = config('app.timezone');

// 如果配置值不存在，返回一个默认值
$value = config('app.timezone', 'Asia/Seoul');
```

## 动态修改配置值

若要应用在运行时修改配置，请使用 config 函数的数组形式

```php
config(['app.timezone' => 'America/Chicago']);
```

#### 公共目录

```php
安装完 Laravel 之后，你必须将 web 服务器根目录指向 public 目录。
该目录下的 index.php 文件将作为所有进入应用程序的 HTTP 请求的前端控制器。
```

#### 配置文件

```php
Laravel 框架的所有配置文件都放在 config 目录中。
每个选项都有注释，方便你随时查看文件并熟悉可用的选项。
```

#### 目录权限

```php
安装完 Laravel 后，你可能需要给这两个文件配置读写权限：storage 目录和
bootstrap/cache 目录应该允许 Web 服务器写入，否则 Laravel 程序将无法运行。
如果你使用的是 Homestead 虚拟机, 这些权限已经为你配置好了。
```

#### 应用密钥

```php
安装 Laravel 之后下一件应该做的事就是将应用程序的密钥设置为随机字符串。
如果你是通过 Composer 或 Laravel 安装器安装的 Laravel，
那这个密钥已经为你通过 php artisan key:generate 命令设置好了。

通常来说，这个字符串长度为 32 个字符。密钥可以在 .env 环境文件中设置。
前提是你要将 .env.example 文件重命名为 .env。 
如果应用程序密钥没有被设置，就不能确保你的用户会话和其他加密数据的安全！
```

#### 其他配置

```php
除了以上的配置，Laravel 几乎就不需要再配置什么了。你随时就能开发！
但是，可能的话，还是希望你查看 config/app.php 文件及其注释。
它包含几个你可能想要根据你的应用来更改的选项，比如 timezone 和 locale。
```

> ### 目录结构

```php
|---app                 目录包含应用程序的核心代码
|   |-Console           目录包含了所有自定义的 Artisan 命令
|   |-Exceptions        目录包含了应用的异常处理器，也是应用抛出异常的好地方
|   |-Http              目录包含了控制器、中间件和表单请求。几乎所有的进入应用的请求的处理逻辑都被放在这里
|   |-Providers         目录包含了应用的所有 服务提供器
|   |-Rules             目录默认不存在，它会在运行 Artisan 命令 make:rule 命令时被创建。包含应用自定义验证规则对象
|   |-Models            目录包含所有 Eloquent 模型类
│   └─ ...
|---bootstrap           目录包含引导框架并配置自动加载的文件
|---config              目录，顾名思义，包含应用程序所有的配置文件
|---database            目录包含数据填充和迁移文件。你还可以把它作为 SQLite 数据库存放目录
|---public              目录包含了入口文件 index.php ，它是进入应用程序的所有请求的入口点
|---resources           目录包含了视图和未编译的资源文件（如 LESS、SASS 或 JavaScript）
|---routes              目录包含了应用的所有路由定义
|   |-web.php           路由基本上都要定义在 web.php 文件中
|   |-api.php           包含的路由位于 api 中间件组约束之内，支持频率限制功能，这些路由是无状态的，所以请求通过这些路由进入应用需要通过 token 进行认证并且不能访问 Session 状态。
|   |-console.php       用于定义所有基于闭包的控制台命令
|   |-channels.php      用于注册应用支持的所有事件广播频道
|---storage
|   |-app               用于存放应用生成的文件
|   |-framework         用于存放框架生成的文件和缓存
|   |-logs              存放的是应用的日志文件
|---tests               目录包含自动化测试文件。Laravel 已内置了 PHPUnit 的测试范例供你参考
|---vendor              目录包含你的 Composer 依赖包
```

## 路由模式

> ### 默认路由文件

routes/web.php

```php
该文件定义用于 web 界面的路由。 这些路由被分配给 web 中间件组， 该组提供会话状态和 CSRF 保护等功能
```

routes/api.php

```php
该文件中的路由是无状态的，这些路由被分配给 api 中间件组。
```

对于大多数应用程序， 都是以在 routes/web.php 文件定义路由开始的。 可以通过在浏览器中输入定义的路由 URL 来访问 routes/web.php 的路由。例如:

```php
// 引用User控制器
use App\Http\Controllers\UserController;

// 路由
Route::get('/user', [UserController::class, 'index']);
```

> ### 基本路由

最基本的 Laravel 路由接受一个 URI 和一个闭包，它提供了一种非常简单和有表现力的方法来定义路由和行为，而不需要复杂的路由配置文件

```php
// 引用Laravel的底层路由
use Illuminate\Support\Facades\Route;

// 基本路由
Route::get('/greeting', function () {
    return 'Hello World';
});
```

> ### 可用的路由器方法

路由器允许你注册能响应任何 HTTP 请求的路由:

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

有的时候你可能需要注册一个可响应多个 HTTP 请求的路由，这时你可以使用 match 方法，也可以使用 any 方法注册一个实现响应所有 HTTP 请求的路由:

```php
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});
```

> ### CSRF 保护

指向 web 路由文件中定义的 `POST`、`PUT` 或 `DELETE` 路由的任何 HTML 表单都应该包含一个 CSRF 令牌字段，否则，这个请求将会被拒绝。

```html
<form method="POST" action="/profile">
    @csrf
    ...
</form>
```

> ### 重定向路由

如果要定义重定向到另一个 URI 的路由，可以使用 `Route::redirect` 方法。

## routes/web.php

```php
<?php
// 引用User控制器
use App\Http\Controllers\IndexController;

// 引用Laravel的底层路由
use Illuminate\Support\Facades\Route;


// 定义首页路由
Route::get('/',[IndexController::class,'index']);

// 定义user路由
Route::get('/user',[IndexController::class,'user']);

/**
 * 重定向
 * 第一个参数 => 从哪个路由开始重定向
 * 第二个参数 => 重定向哪个路由
 * 第三个参数 => 状态码 默认302
*/
Route::redirect('/','/user',301);
```

> ### 视图路由

如果你的路由只需要返回一个视图，可以使用 `Route::view` 方法。它和 `redirect` 一样方便，不需要定义完整的路由或控制器。

view 方法有三个参数，其中前两个是必填参数，分别是 URI 和视图名称。第三个参数选填，可以传入一个数组，数组中的数据会被传递给视图:

```php
// 返回视图
Route::view('/','welcome');

// 返回视图并且返回数据
Route::view('/','welcome',['User' => $data]);
```

> ### 路由参数

## 必填参数

有时您将需要捕获路由内的 URI 段。例如，您可能需要从 URL 中捕获用户的 ID。您可以通过定义路由参数来做到这一点：

```php
// 引用Laravel的底层路由
use Illuminate\Support\Facades\Route;

Route::get('/user/{id}',function($id){
    return 'User '.$id;
});
```

也可以根据您的需要在路由中定义多个参数：

```php
Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
    //
});
```

## 可选参数

有时，你可能需要指定一个路由参数，但你希望这个参数是可选的。你可以在参数后面加上 ? 标记来实现，但前提是要确保路由的相应变量有默认值:

```php
Route::get('/user/{name?}', function ($name = null) {
    return $name;
});

Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});
```

路由的参数通常都会被放在 `{}` ，并且参数名只能为字母。 下划线 `(_)` 也可以用于路由参数名中。路由参数会按路由定义的顺序依次注入到路由回调或者控制器中 `-` ，而不受回调或者控制器的参数名称的影响

> ### 正则表达式约束

你可以使用路由实例上的 where 方法约束路由参数的格式。where 方法接受参数名称和定义参数应如何约束的正则表达式

```php
Route::get('/user/{name}', function ($name) {
    //
})->where('name', '[A-Za-z]+');

Route::get('/user/{id}', function ($id) {
    //
})->where('id', '[0-9]+');

Route::get('/user/{id}/{name}', function ($id, $name) {
    //
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```

> ### 路由命名

路由命名可以方便地为指定路由生成URL或者重定向。通过在路由定义上链式调用 `name` 方法可以指定路由名称：

```php
Route::get('/user/profile',function(){
    // 代码
})->name('profile');
```

你还可以指定控制器行为的路由名称：

```php
Route::get(
    '/user/profile',
    [UserProfileController::class, 'show']
)->name('profile');
```

## 注意：路由命名必须是唯一的

> ### 生成指定路由的URL

一旦为路由指定了名称，你可以在生成 `url` 或者通过 `Laravel` 的 `route` 和 `redirect` 辅助函数重定向时使用路由的名字

```php
// 生成链接...
$url = route('profile');

// 生成重定向...
return redirect()->route('profile');
```

> ### 路由组 && 中间件

路由组允许你共享路由属性，例如中间件，这样不需要在每个单独的路由上定义那些属性

想把 中间件 分配给组内所有的路由，你可以在定义组之前使用 middleware 方法。中间件将按照它们在数组中列出的顺序执行:

```php
// 路由前缀+路由组
Route::prefix('/user')->group(function(){
    Route::get('/user',[IndexController::class,'user']);
});


// 中间件+路由组
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // 使用 first 和 second 中间件...
    });

    Route::get('/user/profile', function () {
        // 使用 first 和 second 中间件...
    });
});
```

## 中间件

中间件提供了一种方便的机制来过滤进入应用程序的 HTTP 请求。例如，Laravel 包含一个验证用户身份的中间件。如果用户未能通过认证，中间件会把用户重定向到登录页面。反之，用户如果通过验证，中间件将把请求进一步转发到应用程序中

> ### 定义中间件

通过运行 `make:middleware` `Artisan` 命令来创建新的中间件

```php
php artisan make:middleware Auth
```

> ### 前置中间件

在应用处理请求之前执行一些任务

```php
<?php

namespace App\Http\Middleware;

use Closure;

class BeforeMiddleware
{
    public function handle($request, Closure $next)
    {
        // Perform action

        return $next($request);
    }
}
```

> ### 后置中间件

中间件是在应用请求之后执行一些任务

```php
<?php

namespace App\Http\Middleware;

use Closure;

class AfterMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Perform action

        return $response;
    }
}
```

> ### 注册中间件

## 全局中间件

如果你希望中间件在应用处理每个 `HTTP` 请求期间运行， 只需要在 `app/Http/Kernel.php` 中的 `$middleware` 属性中列出这个中间件。

## 为路由分配中间件

假设你想为指定的路由分配中间件，首先应该在 `app/Http/Kernel.php` 文件内为该中间件分配一个键。默认情况下，该类中的 `$routeMiddleware` 属性下包含了 `Laravel` 内置的中间件。若要加入自定义的中间件，只需把它附加到列表后并为其分配一个自定义键。例如:

##### app/Http/Kernel.php

```php
// Within App\Http\Kernel class...

protected $routeMiddleware = [
    'auth' => \App\Http\Middleware\Authenticate::class,
    'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
    'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
    'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
    'can' => \Illuminate\Auth\Middleware\Authorize::class,
    'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
    'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
    'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
];
```

在HTTP内核中定义了中间件后，可以使用 `middleware` 方法将中间件分配给路由

```php
Route::get('/profile', function () {
    //
})->middleware('auth');
```

您还可以将多个中间件分配给路由

```php
Route::get('/', function () {
    //
})->middleware(['first', 'second']);
```

> ### 中间件组

有时，可能希望将多个中间件归为一个键，以使其更易于分配给路由。 您可以使用 HTTP 内核的 `$middlewareGroups` 属性来实现。

Laravel 开箱即用，带有 web 和 api 中间件组，其中包含您可能要应用于 Web UI 和 API 路由的通用中间件，请记住，这些中间件组由应用程序的 `App\Providers\RouteServiceProvider` 服务提供商自动应用于相应的 web 和 api 路由文件中的路由

```php
/**
 * The application's route middleware groups.
 *
 * @var array
 */
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        // \Illuminate\Session\Middleware\AuthenticateSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],

    'api' => [
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];
```

> ### 示例登录验证中间件

#### app\Http\Middleware\AuthLogin.php

```php
<?php

namespace App\Http\Middleware;

use App\Models\User\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AuthLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        // 获取cookie
        $LoginUser = Cookie::get('LoginUser') ? Cookie::get('LoginUser') : '';

        // 因为这里存储的是json数据格式，所以这里需要转成数组
        $LoginUser = json_decode($LoginUser,true);

        // dd($LoginUser);

        // 如果cookie为就要重定向登录页面
        if(empty($LoginUser))
        {
            return redirect('/home/login');
        }

        // 查询该用户是否存在
        $User = User::find($LoginUser['id']);

        if(!$User)
        {
            // 清除cookie
            Cookie::queue(Cookie::forget('LoginUser'));
            // 重定向到登录页面
            return redirect('/home/login');
        }

        // 传值给控制器
        $request->attributes->add(['LoginUser' => $User]);


        return $next($request);
    }
}
```

#### app\Http\Kernel.php

```php
<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{


    ...

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array<string, class-string|string>
     */
    protected $routeMiddleware = [
        // 新注册的中间件
        'authlogin' => \App\Http\Middleware\AuthLogin::class,
        ...
    ];
}
```

#### routes\web.php

```php
<?php

use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 首页路由
Route::get('/',[IndexController::class,'index']);


// 需要登录认证
Route::prefix('/home')->middleware('authlogin')->group(function(){
    Route::get('/user',[IndexController::class,'user']);
});


// 不需要登录认证
Route::prefix(('/home'))->group(function(){
    Route::get('/login',[IndexController::class,'login']);
});
```

#### app\Http\Controllers\IndexController.php

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    // 首页
    public function index()
    {


        return '首页';

    }

    // user
    public function user(Request $request)
    {
        // 获取中间件传的参
        $params = $request->get('LoginUser');

        // 打印
        dump($params);

        return 'user';
    }

    public function login()
    {

        // 用户数据
        $data = [
            'id' => 1,
            'username' => 'admin'
        ];

        // 转成json字符串
        $DataJson = json_encode($data);

        // 设置cookie
        Cookie::queue('LoginUser',$DataJson);

        return 'login';
    }
}
```

## 控制器

为了替代在路由文件中以闭包形式定义的所有的请求处理逻辑，你可能想要使用控制类来组织这些行为。控制器能将相关的请求处理逻辑组成一个单独的类。

> ### 定义控制器

通过运行 `make:controller` `Artisan` 命令来创建新的控制器

```php
php artisan make:controller UserController
```

看一个基础控制器的例子，需要注意的是，该控制器继承了 `Laravel` 的基础控制器 `App\Http\Controllers\Controller`

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    /**
     * 显示指定用户的简介
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

你可以像这样定义一个指向控制器行为的路由

```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
```

> ### 单行为控制器

如果控制器操作特别复杂，可能会发现将整个控制器类专用于单个操作会很方便。为此，可以在控制器内定义一个单一的 `__invoke` 方法

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class ProvisionServer extends Controller
{
    /**
     * 设置新的 web 服务器
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        // ...
    }
}
```

为单个行为控制器注册路由时，无需指定控制器方法。相反，可以简单的将控制器的名称传递给路由

```php
use App\Http\Controllers\ProvisionServer;

Route::post('/server', ProvisionServer::class);
```

可以通过 Artisan 命令工具里的 `make:controller` 命令中的 `--invokable` 选项来生成可调用的控制器

```php
php artisan make:controller ProvisionServer --invokable
```

> ### 控制器中间件

中间件 可以在路由文件中分配给控制器的路由

```php
Route::get('profile', [UserController::class, 'show'])->middleware('auth');
```

然而，在控制器的构造函数中指定中间件更为方便。使用控制器构造函数中的 `middleware` 方法，可以轻松的将中间件分配给控制器。甚至可以将中间件限制为只在控制器中的某些方法生效

```php
class UserController extends Controller
{
    /**
     * 实例化一个新的控制器实例
     *
     * @return void
     */
    public function __construct()
    {
        // 所有方法都会应用auth的中间件
        $this->middleware('auth');

        // 只有index方法应用了log的中间件
        $this->middleware('log')->only('index');

        // 除了store方法，其他方法都应用subscribed的中间件
        $this->middleware('subscribed')->except('store');
    }
}
```

同时，控制器还允许使用一个闭包来注册中间件，这为不定义整个中间件类的情况下为单个控制器定义中间件提供了一种便捷的方法

```php
$this->middleware(function ($request, $next) {
    return $next($request);
});
```

> ### 资源型控制器

Laravel 的资源路由通过单行代码即可将典型的「CURD (增删改查)」路由分配给控制器。首先，我们可以使用 `Artisan` 命令 `make:controller` 的 `--resource` 选项来快速创建一个控制器

```php
php artisan make:controller PhotoController --resource
```

这个命令将会生成一个控制器 app/Http/Controllers/PhotoController.php。其中包括每个可用资源操作的方法。接下来，你可以给控制器注册一个资源路由

```php
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class);
```

这个命令会生成一个控制器 `app/Http/Controllers/PhotoController.php` 。其中包含了每个可用资源的操作方法。 接下来，你可以给控制器注册一个资源路由

```php
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class);
```

这个单一路由声明创建多个路由来处理资源上的各种行为。生成的控制器为每个行为保留了方法，包括了关于处理 `HTTP` 动作和 `URIs` 的声明注释。 可以通过将一个数组传入到`resources`方法中的方式来一次性的创建多个资源控制器

```php
Route::resources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

## 资源控制器操作处理

|   Verb    |          URI           | Action  |   Route Name   |
| :-------: | :--------------------: | :-----: | :------------: |
|    GET    |       `/photos`        |  index  |  photos.index  |
|    GET    |    `/photos/create`    | create  | photos.create  |
|   POST    |       `/photos`        |  store  |  photos.store  |
|    GET    |   `/photos/{photo}`    |  show   |  photos.show   |
|    GET    | `/photos/{photo}/edit` |  edit   |  photos.edit   |
| PUT/PATCH |   `/photos/{photo}`    | update  | photos.update  |
|  DELETE   |   `/photos/{photo}`    | destroy | photos.destroy |

## 指定资源模型

如果你使用了路由模型的绑定 路由模型绑定 并且想在资源控制器的方法中使用类型提示，你可以在生成控制器的时候使用 `--model` 选项

```php
php artisan make:controller PhotoController --resource --model=Photo
```

> ### API 资源路由

当声明用于 `APIs` 的资源路由时，通常需要排除显示 `HTML` 模板的路由。例如 `create and edit`。为了方便起见 `apiResource` 方法自动排除这两个路由

```php
use App\Http\Controllers\PhotoController;

Route::apiResource('photos', PhotoController::class);
```

你也可以传递一个数组给 `apiResources` 方法来同时注册多个 API 资源控制器

```php
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\PostController;

Route::apiResources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

要快速生成不包含 `create` 或 `edit` 方法的用于开发接口的资源控制器，请在执行 `make:controller` 命令时使用 `--api` 参数

```php
php artisan make:controller PhotoController --api
```

> ### 依赖注入 & 控制器

## 构造注入

Laravel 服务容器 用于解析所有 Laravel 控制器。因此，你可以在控制器的构造函数中使用类型提示需要的依赖项。声明的解析会自动解析并注入到控制器实例中去

```php
<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;

class UserController extends Controller
{
    /**
     * 用户 repository 实例
     */
    protected $users;

    /**
     * 创建一个新的控制器实例
     *
     * @param  \App\Repositories\UserRepository  $users
     * @return void
     */
    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }
}
```

## 方法注入

除了构造器注入以外，你还可以在控制器方法中类型提示依赖项。最常见的用法便是注入 `Illuminate\Http\Request` 到你的控制器方法中

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * 保存一个新用户
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request->name;

        //
    }
}
```

如果你的控制器方法要从路由参数中获取输入内容，请在你的依赖项之后列出你的路由参数。例如，你可以像这样定义路由

```php
use App\Http\Controllers\UserController;

Route::put('/user/{id}', [UserController::class, 'update']);
```

如下所示，你依然可以类型提示 `Illuminate\Http\Request` 并通过定义你的控制器方法访问 `id` 参数

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * 修改制定的用户
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // 输出id
        dd($id);
    }
}
```

## 请求对象

Laravel 的 `Illuminate\Http\Request` 类提供了一种面向对象的方法，可以与应用程序处理的当前 HTTP 请求进行交互，以及检索与请求一起提交的输入内容，cookies 和文件

> ### 访问请求

要通过依赖注入获得当前 `HTTP` 请求的实例，您应该在路由闭包或控制器方法上导入 `Illuminate\Http\Request` 类。传入的请求实例将由 Laravel 服务容器 自动注入

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * 存储一个新用户
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request->input('name');

        //
    }
}
```

> ### 依赖注入和路由参数

如果控制器方法也需要路由的参数传入，则应在其引入的依赖后面列出路由参数。路由应该定义如下

```php
use App\Http\Controllers\UserController;

Route::put('/user/{id}', [UserController::class, 'update']);
```

您应该注入 `Illuminate\Http\Request`, 并通过如下定义控制器方法，来访问 id 路由参数

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * 更新指定的用户。
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }
}
```

## 检索请求路径

```
path` 方法返回请求的路径信息。因此，如果传入请求的目标是 `http://example.com/foo/bar`，则 `path` 方法将返回 `foo/bar
$uri = $request->path();
```

## 检索请求 URL

要检索传入请求的完整 URL，可以使用 `url` 或 `fullUrl` 方法。`url` 方法将返回不包含查询字符串的 URL，而 `fullUrl` 方法包含查询字符串

```php
$url = $request->url();

$urlWithQueryString = $request->fullUrl();
```

## 检索请求方法

`method` 方法将返回请求的 HTTP 动词。你可以使用 `isMethod` 方法来验证 HTTP 动词是否匹配给定的字符串

```php
$method = $request->method();

if ($request->isMethod('post')) {
    //
}
```

> ### 输入

可以使用 `all` 方法以 array 的形式检索所有传入请求的输入数据。无论传入的请求是来自 HTML 表单还是 XHR 请求，都可以使用此方法

```php
$input = $request->all();
```

## 检索一个输入值

使用一些简单的方法，可以从 `Illuminate\Http\Request` 实例获取所有的用户输入数据，而不用在意用户使用的是哪种 HTTP请求。不管是什么 HTTP 请求， input 方法都可以用来获取用户的输入数据

```php
$name = $request->input('name');
```

可以将默认值作为第二个参数传递给 `input`` 方法。 如果请求中不存在第一个参数指定的字段的输入值，则将返回此值

```php
$name = $request->input('name', 'Sally');
```

当使用包含数组输入的表单时，请使用「.」符号来访问数组

```php
$name = $request->input('products.0.name');

$names = $request->input('products.*.name');
```

可以不带任何参数地调用 `input` 方法，以便将所有输入值作为关联数组进行检索

```php
$input = $request->input();
```

## 从查询字符串中检索输入

当 `input` 方法从整个请求有效负载（包括查询字符串）中检索值时，query 方法将仅从查询字符串中检索值

```php
$name = $request->query('name');
```

如果请求的查询字符串的值不存在，则将返回此方法的第二个参数

```php
$name = $request->query('name', 'Helen');
```

你可以不带任何参数地调用 `query` 方法，以将所有查询字符串值作为关联数组来检索

```php
$query = $request->query();
```

## 检索 JSON 输入值

向应用程序发送 JSON 请求时，只要将请求的 `Content-Type` 标头正确设置为 `application/json`，就可以通过 `input` 方法访问 JSON 数据。甚至可以使用 “点” 语法来检索嵌套在 JSON 数组中的值

```php
$name = $request->input('user.name');
```

## 检索布尔输入值

当处理诸如复选框之类的 HTML 元素时，可能会收到实际上是字符串的 “真实” 值。例如，`true` 或 `on`。为了方便起见，你可以使用 boolean 方法将这些值作为布尔值检索

```php
// 为 1，1，true，true，on 和 yes 返回 true。所有其他值将返回 false
$archived = $request->boolean('archived');
```

## 通过动态属性检索输入

还可以使用 Illuminate\Http\Request 实例上的动态属性访问用户输入。例如，如果用户输入的数据包含一个 name 字段，那么可以像下面这样访问该字段的值

```php
// 使用动态属性时，Laravel 将首先在请求有效负载中查找参数的值。如果不存在，Laravel 将在匹配的路线参数中搜索该字段
$name = $request->name;
```

## 检索输入数据的一部分

如果需要检索输入数据的子集，则可以使用 `only` 和 `except` 方法。这两种方法都接受单个 数组 或动态参数列表

```php
// 只接收username，password
$input = $request->only(['username', 'password']);

$input = $request->only('username', 'password');

// 除了credit_card字段不接收
$input = $request->except(['credit_card']);

$input = $request->except('credit_card');
```

注意：`only` 方法返回你请求的所有键 / 值对；但是，它不会返回请求中不存在的键 / 值对。

## 判断输入值是否存在

你可以使用 `has` 来判断当前请求中是否含有指定的值。如果请求中存在该值则 `has` 方法将会返回 true

```php
if ($request->has('name')) {
    //
}
```

当给定一个数组时，has 将会判断指定的值是否全部存在

```php
if ($request->has(['name', 'email'])) {
    //
}
```

如果你想要判断一个值在请求中是否存在，并且不为空，可以使用 `filled` 方法

```php
if ($request->filled('name')) {
    //
}
```

> ### Cookie

Laravel 框架创建的所有 `cookie` 均已加密并使用身份验证代码签名，这意味着如果客户端更改了它们，它们将被视为无效。若要从请求中检索 `cookie` 值，请在 `Illuminate\Http\Request` 实例上使用 `cookie` 方法

```php
$value = $request->cookie('name');
```

或者，您可以使用 `Cookie Facade` 来访问 cookie 的值

```php
$value = Cookie::get('name');
```

> ### 文件

## 获取上传的文件

您可以使用 file 方法或使用动态属性从 `Illuminate\Http\Request` 实例中访问上传的文件。 该 file 方法返回 `Illuminate\Http\UploadedFile` 的实例，该类继承了 PHP 的 SplFileInfo 类的同时也提供了各种与文件交互的方法

```php
$file = $request->file('photo');

$file = $request->photo;
```

你可以使用 hasFile 方法确认请求中是否存在文件

```php
if ($request->hasFile('photo')) {
    //
}
```

除了检查上传的文件是否存在外，你也可以通过 `isValid` 方法验证上传的文件是否有效

```php
if ($request->file('photo')->isValid()) {
    //
}
```

要存储上传的文件，通常会使用已配置的 文件系统。你可以使用 UploadedFile 的 store 方法把上传文件移动到你的某个磁盘上，该文件可能是本地文件系统中的一个位置，甚至像 Amazon S3 这样的云存储位置。

store 方法接受相对于文件系统配置的根目录应存储文件的路径。 该路径不能包含文件名，因为将自动生成一个唯一的 ID 作为文件名。

store 方法还接受一个可选的第二个参数作为应用于存储文件的磁盘的名称。 该方法将返回文件相对于磁盘根目录的路径

```php
$path = $request->photo->store('images');

$path = $request->photo->store('images', 's3');
```

## 数据库操作

几乎所有的应用程序都需要和数据库进行交互。Laravel 为此提供了一套非常简单易用的数据库交互方式。开发者可以使用原生 SQL、查询构造器 以及 Eloquent ORM 等方式与数据库交互

> ### 配置文件

数据库的配置文件在 `config/database.php` 文件中。你可以在这个文件中配置所有的数据库连接，并指定默认的数据库连接，该文件中的大部分配置都基于项目的环境变量，且提供了大部分 Laravel 所支持的数据库配置示例

> ### 执行原生 SQL 查询

一旦配置好数据库连接，你就可以使用 `DB Facade` 来执行查询。`DB Facade` 为每种类型的查询都提供了相应的方法：`select`、`update`、`insert`、`delete` 以及 `statement`

#### 执行 SELECT 查询

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * 展示用户列表
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::select('SELECT * FROM `users` WHERE `active` = ?', [1]);

        return view('user.index', ['users' => $users]);
    }
}
```

传递给 `select` 方法的第一个参数是一个原生 `SQL` 查询语句，而第二个参数则是需要绑定到查询中的参数值。通常，这些值用于约束 `where` 语句。使用参数绑定可以有效防止 `SQL` 注入。

`select` 方法将始终返回一个包含查询结果的数组。数组中的每个结果都会是一个代表数据库记录的 `stdClass` 对象

```php
use Illuminate\Support\Facades\DB;

$users = DB::select('select * from users');

foreach ($users as $user) {
    echo $user->name;
}
```

#### 使用命名绑定

除了使用 `?` 表示参数绑定外，也可以使用命名绑定的形式来执行一个查询

```php
$results = DB::select('select * from users where id = :id', ['id' => 1]);
```

#### 执行 INSERT 查询

你可以使用 `DB Facade` 的 `insert` 方法来执行 `insert` 语句。跟 `select` 方法一样，该方法的第一个和第二个参数分别是原生 SQL 语句和绑定的数据

```php
use Illuminate\Support\Facades\DB;

DB::insert('insert into users (id, name) values (?, ?)', [1, 'Marc']);
```

#### 执行 UPDATE 查询

`update` 方法用于更新数据库中现有的记录。该方法将会返回受到本次操作影响的记录行数

```php
use Illuminate\Support\Facades\DB;

$affected = DB::update(
    'update users set votes = 100 where name = ?',
    ['Anita']
);
```

#### 执行 DELETE 语句

`delete` 方法用于从数据库中删除现有的记录。与 `update` 方法一样，返回受到本次操作影响的记录行数

```php
use Illuminate\Support\Facades\DB;

$deleted = DB::delete('delete from users');
```

#### 执行普通查询

部分数据库语句没有返回值。对于这些语句，你可以使用 `DB Facade` 的 `statement` 方法

```php
DB::statement('drop table users');
```

> ### 数据库事务

你可以使用 `DB Facade` 的 `transaction` 方法在数据库事务中运行一系列操作。如果事务的闭包中出现了异常，Laravel 将会自动回滚该事务。如果该闭包执行成功，事务将会被自动提交。你完全不需要担心手动回滚或者提交的问题

```php
use Illuminate\Support\Facades\DB;

DB::transaction(function () {
    DB::update('update users set votes = 1');

    DB::delete('delete from posts');
});
```

#### 处理死锁

`transaction` 方法接受一个可选的第二参数，该参数用于表示事务在遇到死锁时尝试重新执行的次数。如果尝试指定次数后依然无法执行，将会抛出一个异常

```php
use Illuminate\Support\Facades\DB;

DB::transaction(function () {
    DB::update('update users set votes = 1');

    DB::delete('delete from posts');
}, 5);
```

#### 手动执行事务

如果您想手动开始事务并完全控制回滚和提交，则可以使用 `beginTransaction` 提供的方法 `DB`

```php
use Illuminate\Support\Facades\DB;

DB::beginTransaction();
```

您可以通过以下 `rollBack` 方法回滚事务

```php
DB::rollBack();
```

最后，您可以通过以下 `commit` 方法提交事务

```php
DB::commit();
```

> ### 查询构造器

Laravel 的数据库查询构造器为创建和运行数据库查询提供了一个方便的接口。它可以用于支持大部分数据库操作，并与 Laravel 支持的所有数据库系统完美运行

#### 查询所有数据

你可以使用 `DB` facade 里的 `table` 方法来开始查询。`table` 方法为给定的表返回一个查询构造器实例，允许你在查询上链式调用更多的约束，最后使用 `get` 方法获取结果

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * 展示所有用户数据。
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('users')->get();

        return view('user.index', ['users' => $users]);
    }
}
```

`get` 方法返回一个包含 `Illuminate\Support\Collection` 的结果，其中每个结果都是 PHP `StdClass` 对象的一个实例。你可以访问字段作为对象的属性来访问每列的值

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')->get();

foreach ($users as $user) {
    echo $user->name;
}
```

#### 从数据表中获取单行或单列

如果你只需要从数据表中获取一行数据，你可以使用 `first` 方法。该方法返回一个 `StdClass` 对象

```php
$user = DB::table('users')->where('name', 'John')->first();

return $user->email;
```

如果你不需要整行数据，则可以使用 value 方法从记录中获取单个值。该方法将直接返回该字段的值

```php
$email = DB::table('users')->where('name', 'John')->value('email');
```

如果是通过 `id` 字段值获取一行数据，可以使用 `find` 方法

```php
$user = DB::table('users')->find(3);
```

#### 获取一列的值

```php
use Illuminate\Support\Facades\DB;

$titles = DB::table('users')->pluck('title');

foreach ($titles as $title) {
    echo $title;
}
```

#### 聚合

查询构造器还提供了各种聚合方法，比如 `count`，`max`，`min`，`avg`，还有 `sum`。你可以在构造查询后调用任何方法

```php
use Illuminate\Support\Facades\DB;

// 查询数据总数
$users = DB::table('users')->count();

// 查询某个字段的最大值
$price = DB::table('orders')->max('price');
```

#### Select

如果不想从数据库表中获取所有列。那么可以使用 select 方法来查询指定的字段

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')
            ->select('name', 'email as user_email')
            ->get();
```

#### 原生表达式

有时候可能需要在查询中使用原生表达式。可以使用 `DB::raw` 创建一个原生表达式

```php
$users = DB::table('users')
             ->select(DB::raw('count(*) as user_count, status'))
             ->where('status', '<>', 1)
             ->groupBy('status')
             ->get();
```

#### Join 链表查询

##### Inner Join 内链表

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'contacts.phone', 'orders.price')
            ->get();
```

##### Left Join 左链表

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')
            ->leftJoin('posts', 'users.id', '=', 'posts.user_id')
            ->get();
```

##### Right Join 右链表

```php
use Illuminate\Support\Facades\DB;

$users = DB::table('users')
            ->rightJoin('posts', 'users.id', '=', 'posts.user_id')
            ->get();
```

#### Union 联合查询

查询构造器还提供了一种简洁的方式将两个或者多个查询联合在一起。例如，你可以先创建一个查询，然后使用 `union` 方法来连接更多的查询

```php
use Illuminate\Support\Facades\DB;

$first = DB::table('users')
            ->whereNull('first_name');

$users = DB::table('users')
            ->whereNull('last_name')
            ->union($first)
            ->get();
```

#### where 条件查询

```php
<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * 展示用户列表
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /* 
            第一个参数 => 字段名
            第二个参数 => 操作符 如果把指定的值作为第二个参数时，laravel会默认使用 = 操作符
            第三个参数 => 指定的值或者比较字段的值
        */
        $users = DB::table('users')
                ->where('votes', '=', 100)
                ->where('age', '>', 35)
                ->get();

        // votes 大于等于 100
        $users = DB::table('users')
                ->where('votes', '>=', 100)
                ->get();

        // votes 不等于 1000
        $users = DB::table('users')
                ->where('votes', '<>', 100)
                ->get();

        // 模糊查询name以T开头
        $users = DB::table('users')
                ->where('name', 'like', 'T%')
                ->get();

        // 条件数组
        $users = DB::table('users')->where([
            ['status', '=', '1'],
            ['subscribed', '<>', '1'],
        ])->get();
    }
}
```

#### orWhere

当链式调用多个 `where` 方法的时候，这些 `where` 语句将会被看成是 `and` 关系。另外，您也可以在查询语句中使用 orWhere 方法来表示 or 关系。`orWhere` 方法接收的参数和 where 方法接收的参数一样

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = DB::table('users')
                ->where('votes', '>', 100)
                ->orWhere('name', 'John')
                ->get();

        // 如果您需要在括号内对 or 条件进行分组，那么可以传递一个闭包作为 orWhere 方法的第一个参数
        $users = DB::table('users')
                ->where('votes', '>', 100)
                ->orWhere(function($query) {
                    $query->where('name', 'Abigail')
                        ->where('votes', '>', 50);
                })
                ->get();
    }
}
```

> ### 其他 Where 语句

#### whereBetween / orWhereBetween

`whereBetween` 方法是用来验证字段的值是否在给定的两个值之间

```php
$users = DB::table('users')
           ->whereBetween('votes', [1, 100])
           ->get();
```

#### whereNotBetween / orWhereNotBetween

`whereNotBetween` 方法是用来验证字段的值是否不在给定的两个值之间

```php
$users = DB::table('users')
            ->whereNotBetween('votes', [1, 100])
            ->get();
```

#### whereIn / whereNotIn / orWhereIn / orWhereNotIn

`whereIn` 方法是用来验证一个字段的值是否在给定的数组中

```php
$users = DB::table('users')
            ->whereIn('id', [1, 2, 3])
            ->get();
```

#### whereNotIn 方法是用来验证一个字段的值是否不在给定的数组中

```php
$users = DB::table('users')
            ->whereNotIn('id', [1, 2, 3])
            ->get();
```

#### whereNull / whereNotNull / orWhereNull / orWhereNotNull

`whereNull` 方法是用来验证给定字段的值是否为 NULL：

```php
$users = DB::table('users')
            ->whereNull('updated_at')
            ->get();
```

#### whereNotNull 方法是用来验证给定字段的值是否不为 NULL

```php
$users = DB::table('users')
            ->whereNotNull('updated_at')
            ->get();
```

#### whereDate / whereMonth / whereDay / whereYear / whereTime

`whereDate` 方法是用来比较字段的值与给定的日期值是否相等 （年 - 月 - 日）

```php
$users = DB::table('users')
            ->whereDate('created_at', '2016-12-31')
            ->get();
```

`whereMonth` 方法是用来比较字段的值与给定的月份是否相等（月）

```php
$users = DB::table('users')
            ->whereMonth('created_at', '12')
            ->get();
```

`whereDay` 方法是用来比较字段的值与一个月中给定的日期是否相等 （日）

```php
$users = DB::table('users')
            ->whereDay('created_at', '31')
            ->get();
```

`whereYear` 方法是用来比较字段的值与给定的年份是否相等（年）

```php
$users = DB::table('users')
            ->whereYear('created_at', '2016')
            ->get();
```

`whereTime` 方法是用来比较字段的值与给定的时间是否相等（时：分: 秒）

```php
$users = DB::table('users')
            ->whereTime('created_at', '=', '11:20:45')
            ->get();
```

> ### Ordering, Grouping, Limit

```
orderBy` 方法允许你通过给定字段对结果集进行排序。 `orderBy` 的第一个参数应该是你希望排序的字段，第二个参数控制排序的方向，可以是 `asc` 或 `desc
$users = DB::table('users')
            ->orderBy('name', 'desc')
            ->get();
```

如果你需要使用多个字段进行排序，你可以多次引用 `orderBy`

```php
$users = DB::table('users')
            ->orderBy('name', 'desc')
            ->orderBy('email', 'asc')
            ->get();
```

`groupBy` 和 `having` 方法用于将结果分组。 `having` 方法的使用与 `where` 方法十分相似

```php
$users = DB::table('users')
            ->groupBy('account_id')
            ->get();
```

可以向 `groupBy` 方法传递多个参数，来对结果使用多个字段进行分组

```php
$users = DB::table('users')
            ->groupBy('first_name', 'status')
            ->having('account_id', '>', 100)
            ->get();
```

`limit` 方法用于限制结果的返回数量

```php
$users = DB::table('users')
            ->limit(5)
            ->get();
```

> ### 插入语句

查询构造器还提供了 `insert` 方法用于插入记录到数据库中。 `insert` 方法接收数组形式的字段名和字段值进行插入操作

```php
DB::table('users')->insert([
    'email' => 'kayla@example.com',
    'votes' => 0
]);
```

你甚至可以将二维数组传递给 `insert` 方法，依次将多个记录插入到表中

#### 自增 IDs

如果数据表有自增 ID ，使用 `insertGetId` 方法来插入记录可以返回 ID 值

```php
$id = DB::table('users')->insertGetId(
    ['email' => 'john@example.com', 'votes' => 0]
);
```

> ### 更新语句

除了插入记录到数据库中，查询构造器也可以通过 `update` 方法更新已有的记录。 `update` 方法和 `insert` 方法一样，接受包含要更新的字段及值的数组

```php
$affected = DB::table('users')
              ->where('id', 1)
              ->update(['votes' => 1]);
```

#### 自增与自减

查询构造器还提供了方便的方法来递增或递减给定列的值。这两个方法都至少接受一个参数：要修改的列。可以提供第二个参数来指定列的递增或递减量

```php
DB::table('users')->increment('votes');

DB::table('users')->increment('votes', 5);

DB::table('users')->decrement('votes');

DB::table('users')->decrement('votes', 5);
```

也可以在操作过程中指定要更新的其他字段

```php
DB::table('users')->increment('votes', 1, ['name' => 'John']);
```

> ### 删除语句

查询构造器也可以使用 `delete` 方法从表中删除记录。 在使用 `delete` 前，可以添加 `where` 子句来约束 `delete` 语法

```php
DB::table('users')->delete();

DB::table('users')->where('votes', '>', 100)->delete();
```

> ### 调试

在绑定查询的时候，您可以使用 `dd` 或 `dump` 方法来输出查询绑定和 SQL。`dd` 方法将会显示调试信息并终止执行请求，而 `dump` 方法则会显示调试信息并允许请求继续执行

```php
DB::table('users')->where('votes', '>', 100)->dd();

DB::table('users')->where('votes', '>', 100)->dump();
```

## Eloquent ORM模型

通常完成实际的业务逻辑和数据封装，并返回和格式无关的数据

> ### 生成模型类

创建一个 `Eloquent` 模型。模型通常位于 `app\Models` 目录中，并扩展 `Illuminate\Database\Eloquent\Model` 类

```shell
# 生成模型
php artisan make:model Flight

# 生成模型和 migration 数据库迁移
php artisan make:model Flight --migration

# 生成模型和 Flight工厂类...
php artisan make:model Flight --factory
php artisan make:model Flight -f

# 生成模型和 Flight 数据填充类...
php artisan make:model Flight --seed
php artisan make:model Flight -s

# 生成模型和 Flight 控制器类...
php artisan make:model Flight --controller
php artisan make:model Flight -c

# 生成模型和迁移(m)、工厂(f)、数据填充(s)、控制器(c)...
php artisan make:model Flight -mfsc
```

> ### 模型属性

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    // 设置当前模型对应的完整数据表名称
    protected $table = 'my_flights';

    // 如果该数据表的主键不是id，那么需要设置主键属性
    protected $primaryKey = 'flight_id';

    // 如果主键不是自增或者不是数字类型
    public $incrementing = false;

    // 如果模型主键不是 integer
    protected $keyType = 'string';
}
```

> ### 时间戳

默认情况下，`Eloquent` 希望模型相应的数据库表中存在 `created_at` 和 `updated_at`这两个字段，在新增数据或者更新数据时 `Eloquent` 会自动设置这两个字段的值，如果不需要自动写入，需要在模型定义 `$timestamps` 属性并且值为false

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    // 是否主动维护时间戳
    public $timestamps = false;
}
```

如果需要自定义时间戳的格式，在你的模型中设置 `$dateFormat` 属性。这个属性决定日期属性在数据库的存储方式，以及模型序列化为数组或者 JSON 的格式

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
     * 模型日期的存储格式
     *
     * @var string
     */
    protected $dateFormat = 'U';
}
```

如果你需要自定义存储时间戳的字段名，可以在模型中设置 `CREATED_AT` 和 `UPDATED_AT` 常量的值来实现

```php
<?php
class Flight extends Model
{
    const CREATED_AT = 'creation_date';
    // 如果不需要定义UPDATED_AT常量，该属性的值设置为null
    const UPDATED_AT = 'updated_date';
}
```

> ### ORM 查询数据

在模型中除了可以调用数据库类的方法之外（换句话说，数据库的所有查询构造器方法模型中都可以支持），可以定义自己的方法，所以也可以把模型看成是数据库的增强版

```php
// 引入模型
use App\Models\Flight;

// 根据[$id]主键查询 查询一条数据
$flight = Flight::find(1);

//first() 查询第一条
$flight = Flight::where('id','>','1')->orderBy('age','desc')->first();

// findOrFail() 根据主键查询 如果没有查到 报错
$flight = Flight::findOrFail($id);

// all() 查询所有数据  查询数据为集合
$flight = Flight::all();

// chunk() 每次查询指定[$num]条数 当处理大量模型数据的时候，使用该方法会明显减少内存的使用量
Flight::chunk($num,function($data){
    print_r($data);
} );

// 聚合函数 count() 统计记录条数
$num = Flight::count();

// 聚合函数 max() 查询最大值   min() 查询最小值
$max = Flight::where('id','>',1)->max('age');
```

> ### ORM 插入数据

要往数据库新增一条记录，先创建新模型实例，给实例设置属性，然后调用 save 方法

```php
<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    /**
     * 创建一个新实例
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $flight = new Flight;
        $flight->name = $request->name;
        $flight->save();
    }
}
```

## 批量赋值

你也可以使用 `create` 方法来保存新模型。 此方法会返回模型实例。 不过，在使用之前，你需要在模型上指定 `fillable` 或 `guarded` 属性，因为所有的 Eloquent 模型都默认不可进行批量赋值

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    /**
    * 可批量赋值属性
    *
    * @var array
    */
    protected $fillable = ['name'];
}
```

如果想让所有属性都可以批量赋值，可以将 $guarded 定义成一个空数组

```php
/**
 * 不可批量赋值的属性
 *
 * @var array
 */
protected $guarded = [];
```

这样就可以使用create静态方法实现批量赋值

```php
use App\Models\Flight;

$flight = Flight::create([
    'xm' => '小白',
    'sex' => '男',
    'age' => '18',
]);
```

> ### ORM 更新数据

`save` 方法也可以用来更新数据库中已经存在的模型。 要更新模型，您应该检索它并设置您希望更新的任何属性。 然后调用模型的 `save` 方法。 同样，`updated_at` 时间戳会自动更新，因此无需手动设置其值

```php
use App\Models\Flight;

$flight = Flight::find(1);

$flight->name = 'Paris to London';

$flight->save();
```

## 批量更新

也可以更新匹配查询条件的多个模型。在这个示例中，所有的男生所在系部变为1

```php
use App\Models\Flight;


$flight = Flight::where('sex', 1)
          ->update(['depid' => 1]);
```

## updateOrCreate

你还可能遇到希望更新现有模型或在不存在的情况下则创建新的模型的情景。 Laravel 提供 `updateOrCreate` 方法来一步实现。将id为20的同学信息改为性别男,所在系部为3

```php
use App\Models\Flight;

$flight = Flight::updateOrCreate(
    ['xh'=>9512101],
    ['sex' => 1, 'depid' => 3]
);
```

> ### ORM 删除

可以在模型实例上调用 `delete` 方法来删除实例

```php
use App\Models\Flight;

$flight = Flight::find(1);

$flight->delete();
```

## 通过主键删除模型

在上面的例子中，在调用 `delete` 之前需要先去数据库中查找对应的模型。事实上，如果你知道了模型的主键，你可以直接使用 `destroy` 方法来删除模型，而不用先去数据库中查找。`destroy` 方法除了接受单个主键作为参数之外，还接受多个主键，或者使用数组、集合来保存多个主键

```php
use App\Models\Flight;

// 删除单条
$flight = Flight::destroy(1);

// 删除多个主键
$flight = Flight::destroy(1, 2, 3);

// 一个主键数组或一个主键集合
$flight = Flight::destroy([1, 2, 3]);
```

## 使用查询删除模型

通过 Eloquent 查询来删除所有符合查询条件的模型。 例如，将删除所有标记为非活跃的航班。与批量更新一样，批量删除不会为删除的模型启动任何模型事件

```php
$deletedRows = Flight::where('active', 0)->delete();
```

## 软删除

除了真实删除记录，还可以 "软删除"。 软删除不会从数据库中删除，而是在 deleted_at 属性中设置删除模型的日期和时间。要启用软删除，请在模型中添加 `Illuminate\Database\Eloquent\SoftDeletes` trait

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Flight extends Model
{
    use SoftDeletes;
}
```

还需要把 `deleted_at` 字段添加到数据表中，注意: deleted_at 字段名无法重新设置,且数据格式必须为datetime，直接调用 `delete()` 方法或者 `destroy()` 方法即可

```php
use App\Models\Flight;

$flight = Flight::destroy($id);
```

## 恢复删除

```php
use App\Models\Flight;

$flight = Flight::onlyTrashed()->where('id', $id)->restore();
```

## 永久删除

有时可能需要从数据库中真正删除数据。要从数据库中永久删除软删除的数据，请使用 `forceDelete` 方法

```php
use App\Models\Flight;

$flight = Flight::forceDeleted($id);
```

## 查询软删除数据

##### 查询包含软删除的数据

可以使用 `withTrashed` 方法来获取包括软删除模型在内的数据

```php
use App\Models\Flight;

$flights = Flight::withTrashed()
                ->where('account_id', 1)
                ->get();
```

##### 只查询软删除的数据

```php
`onlyTrashed` 方法 只获取已软删除的数据

$flights = Flight::onlyTrashed()
                ->where('airline_id', 1)
                ->get();
```

> ### 属性访问器

若要定义一个访问器， 则需在模型上创建一个 `getDingAttribute` 方法，要访问的 `Ding` 字段需使用「驼峰式」命名。 在这个示例中，我们将为 `ding` 属性定义一个访问器。当模型尝试获取 `ding` 属性时，将自动调用此访问器

```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 获取用户名
     *
     * @param  string  $value
     * @return string
     */
    public function getFirstNameAttribute($value)
    {
        return strtolower($value); // 转小写
    }
}
```

字段的原始值被传递到访问器中，允许对它进行处理并返回结果。如果想获取被修改后的值，你可以在模型实例上访问 `first_name` 属性

```php
use App\Models\User;

$user = User::find(1);

$firstName = $user->first_name; // 得到小写的名字
```

> ### 属性修改器

若要定义一个修改器，则需在模型上面定义 `setFooAttribute` 方法。要访问的 Foo 字段使用「驼峰式」命名。让我们再来定义一个 `first_name` 属性的修改器。当我们尝试使用 `first_name` 属性值时，该修改器将被自动调用

```php
<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * 设置用户名
     *
     * @param  string  $value
     * @return void
     */
    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = strtolower($value);
    }
}
```

修改器会获取属性已经被设置的值，允许你修改并且将其值设置到 Eloquent 模型内部的 `$attributes` 属性上。举个例子，如果我们尝试将 `first_name` 属性的值设置为 DING

```php
use App\Models\User;

$user = User::find(1);

$user->first_name = 'Sally';
```

## 数据库迁移与填充

> ### 数据库迁移

迁移就像是对数据库进行的版本控制，让您的团队能够轻松地去定义和共享程序的数据库结构。Laravel 的 `Schema` facade 提供了数据库相关的支持，可以在所有 Laravel 支持的数据库管理系统中创建和操作表。通常，迁移将使用此 Facade 创建和修改数据库的数据表和字段

#### 生成迁移

使用 `make:migration` Artisan 命令 来创建迁移。新的迁移文件会放在 database/migrations 目录。所有的迁移文件名称都会包含一个时间戳，Laravel 将据此决定迁移文件运行的顺序。

```php
php artisan make:migration create_flights_table
```

#### 迁移文件内容

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            // 添加的内容
            $table->string('name');
            $table->string('airline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('flights');
    }
}
```

#### 运行迁移

执行 Artisan 命令 `migrate`，来运行所有未执行过的迁移

```php
php artisan migrate
```

如果你想查看目前已经执行了哪些迁移，可以使用 Artisan 命令 `migrate:status`

```php
php artisan migrate:status
```

#### 回滚迁移

若要回滚最后一次迁移， 可以使用 `rollback` 命令。 此命令将回滚最后一次迁移的操作，其中可能包含多个迁移文件

```php
php artisan migrate:rollback
```

可以在 `rollback` 命令后面加上 `step` 参数，来限制回滚迁移的个数。 例如，以下命令将回滚最近五次迁移

```php
php artisan migrate:rollback --step=5
```

`migrate:reset` 命令可以回滚应用程序中的所有迁移

```php
php artisan migrate:reset
```

#### 使用单个命令同时进行回滚和迁移操作

`migrate:refresh` 命令不仅会回滚数据库的所有迁移还会接着运行 migrate 命令。 这个命令可以高效地重建整个数据库：

```php
php artisan migrate:refresh

// 重置数据库，并运行所有的 seeds...
php artisan migrate:refresh --seed
```

使用 `refresh` 命令并提供 `step` 参数来回滚并再执行最后指定的迁移数。例如， 以下命令将回滚并重新执行最后五次迁移

```php
php artisan migrate:refresh --step=5
```

#### 删除所有表然后执行迁移

使用 `migrate:fresh` 会删去数据库中的所有表，随后执行命令 `migrate`

```php
php artisan migrate:fresh

php artisan migrate:fresh --seed
```

> ### 数据表

#### 创建数据表

可以使用 `Schema facade`的 `create` 方法来创建新的数据库表。 `create` 方法接受两个参数：第一个参数为数据表的名称，第二个参数是 `Closure` ，此闭包会接收一个用于定义新数据表的 `Blueprint` 对象

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->timestamps();
});
```

创建表时，可以使用数据库结构构建器中的任何 [列方法](https://learnku.com/docs/laravel/8.5/migrations/10406#创建列)来定义表的列

#### 检查表 / 列是否存在

可以使用 `hasTable` 和 `hasColumn` 方法来检查数据表或字段是否存在：

```php
if (Schema::hasTable('users')) {
    // "users" 表存在...
}

if (Schema::hasColumn('users', 'email')) {
    // "users" 表存在，并且有 "email" 列...
}
```

#### 数据库连接 & 表选项

如果要对非默认连接的数据库连接执行结构操作，可以使用 `connection` 方法

```php
Schema::connection('sqlite')->create('users', function (Blueprint $table) {
    $table->id();
});
```

还可以使用其他一些属性和方法来定义表创建的其他地方。使用 MySQL 时，可以使用 engine 属性指定表的存储引擎

```php
Schema::create('users', function (Blueprint $table) {
    $table->engine = 'InnoDB';

    // ...
});
```

使用 MySQL 时，可以使用 `charset` 和 `collation` 属性指定创建表的字符集和排序规则

```php
Schema::create('users', function (Blueprint $table) {
    $table->charset = 'utf8mb4';
    $table->collation = 'utf8mb4_unicode_ci';

    // ...
});
```

#### 表的更新

Schema facade 上的 `table` 方法可用于更新现有表。与 `create` 方法一样，table 方法接受两个参数：表的名称和接收到 `Blueprint` 实例的闭包，您可以使用该实例向表中添加列或索引

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('users', function (Blueprint $table) {
    $table->integer('votes');
});
```

#### 重命名 / 删除表

要重命名已存在的数据表，使用 `rename` 方法

```php
use Illuminate\Support\Facades\Schema;

Schema::rename($from, $to);
```

要删除已存在的表， 可以使用 `drop` 或 `dropIfExists` 方法

```php
Schema::drop('users');

Schema::dropIfExists('users');
```

> ### 字段

#### 创建字段

使用 `Schema facade` 的 `table` 方法可以更新现有的数据表。如同 create `方法一样，table` 方法会接受两个参数：一个是数据表的名称，另一个则是接收可以用来向表中添加字段的 `Blueprint` 实例的闭包

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('users', function (Blueprint $table) {
    $table->integer('votes');
});
```

可用的字段类型 数据库结构生成器包含构建表时可以指定的各种字段类型：

| Command                                  | Description                                            |
| :--------------------------------------- | :----------------------------------------------------- |
| $table->bigIncrements('id');             | 递增 ID（主键），相当于「UNSIGNED BIG INTEGER」        |
| $table->bigInteger('votes');             | 相当于 BIGINT                                          |
| $table->binary('data');                  | 相当于 BLOB                                            |
| $table->boolean('confirmed');            | 相当于 BOOLEAN                                         |
| $table->char('name', 100);               | 相当于带有长度的 CHAR                                  |
| $table->date('created_at');              | 相当于 DATE                                            |
| $table->dateTime('created_at');          | 相当于 DATETIME                                        |
| $table->dateTimeTz('created_at');        | 相当于带时区 DATETIME                                  |
| $table->decimal('amount', 8, 2);         | 相当于带有精度与基数 DECIMAL                           |
| $table->double('amount', 8, 2);          | 相当于带有精度与基数 DOUBLE                            |
| $table->enum('level', ['easy', 'hard']); | 相当于 ENUM                                            |
| $table->float('amount', 8, 2);           | 相当于带有精度与基数 FLOAT                             |
| $table->geometry('positions');           | 相当于 GEOMETRY                                        |
| $table->geometryCollection('positions'); | 相当于 GEOMETRYCOLLECTION                              |
| $table->increments('id');                | 递增的 ID (主键)，相当于「UNSIGNED INTEGER」           |
| $table->integer('votes');                | 相当于 INTEGER                                         |
| $table->ipAddress('visitor');            | 相当于 IP 地址                                         |
| $table->json('options');                 | 相当于 JSON                                            |
| $table->jsonb('options');                | 相当于 JSONB                                           |
| $table->lineString('positions');         | 相当于 LINESTRING                                      |
| $table->longText('description');         | 相当于 LONGTEXT                                        |
| $table->macAddress('device');            | 相当于 MAC 地址                                        |
| $table->mediumIncrements('id');          | 递增 ID (主键) ，相当于「UNSIGNED MEDIUM INTEGER」     |
| $table->mediumInteger('votes');          | 相当于 MEDIUMINT                                       |
| $table->mediumText('description');       | 相当于 MEDIUMTEXT                                      |
| $table->morphs('taggable');              | 相当于加入递增的 taggable_id 与字符串 taggable_type    |
| $table->multiLineString('positions');    | 相当于 MULTILINESTRING                                 |
| $table->multiPoint('positions');         | 相当于 MULTIPOINT                                      |
| $table->multiPolygon('positions');       | 相当于 MULTIPOLYGON                                    |
| $table->nullableMorphs('taggable');      | 相当于可空版本的 morphs() 字段                         |
| $table->nullableTimestamps();            | 相当于可空版本的 timestamps() 字段                     |
| $table->point('position');               | 相当于 POINT                                           |
| $table->polygon('positions');            | 相当于 POLYGON                                         |
| $table->rememberToken();                 | 相当于可空版本的 VARCHAR(100) 的 remember_token 字段   |
| $table->smallIncrements('id');           | 递增 ID (主键) ，相当于「UNSIGNED SMALL INTEGER」      |
| $table->smallInteger('votes');           | 相当于 SMALLINT                                        |
| $table->softDeletes();                   | 相当于为软删除添加一个可空的 deleted_at 字段           |
| $table->softDeletesTz();                 | 相当于为软删除添加一个可空的 带时区的 deleted_at 字段  |
| $table->string('name', 100);             | 相当于带长度的 VARCHAR                                 |
| $table->text('description');             | 相当于 TEXT                                            |
| $table->time('sunrise');                 | 相当于 TIME                                            |
| $table->timeTz('sunrise');               | 相当于带时区的 TIME                                    |
| $table->timestamp('added_on');           | 相当于 TIMESTAMP                                       |
| $table->timestampTz('added_on');         | 相当于带时区的 TIMESTAMP                               |
| $table->timestamps();                    | 相当于可空的 created_at 和 updated_at TIMESTAMP        |
| $table->timestampsTz();                  | 相当于可空且带时区的 created_at 和 updated_atTIMESTAMP |
| $table->tinyIncrements('id');            | 相当于自动递增 UNSIGNED TINYINT                        |
| $table->tinyInteger('votes');            | 相当于 TINYINT                                         |
| $table->unsignedBigInteger('votes');     | 相当于 Unsigned BIGINT                                 |
| $table->unsignedDecimal('amount', 8, 2); | 相当于带有精度和基数的 UNSIGNED DECIMAL                |
| $table->unsignedInteger('votes');        | 相当于 Unsigned INT                                    |
| $table->unsignedMediumInteger('votes');  | 相当于 Unsigned MEDIUMINT                              |
| $table->unsignedSmallInteger('votes');   | 相当于 Unsigned SMALLINT                               |
| $table->unsignedTinyInteger('votes');    | 相当于 Unsigned TINYINT                                |
| $table->uuid('id');                      | 相当于 UUID                                            |
| $table->year('birth_year');              | 相当于 YEAR                                            |

#### 字段修饰

除了上述列出的字段类型之外， 还有几个可以在添加字段时使用的 修饰符 。例如，如果要把字段设置为 可空，就使用 `nullable` 方法

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('users', function (Blueprint $table) {
    $table->string('email')->nullable();
});
```

下表时所有可用的列修饰符。此列表不包括索引修饰符

| 修饰符                            | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| ->after('column')                 | 将该列放在其它字段「之后」(MySQL)                            |
| ->autoIncrement()                 | 设置 INTEGER 类型的列为自动递增 (主键)                       |
| ->charset('utf8mb4')              | 为该列指定字符集 (MySQL)                                     |
| ->collation('utf8mb4_unicode_ci') | 为该列指定排序规则 (MySQL/PostgreSQL/SQL Server)             |
| ->comment('my comment')           | 为该列添加注释 (MySQL/PostgreSQL)                            |
| ->default($value)                 | 为该列指定一个「默认值」                                     |
| ->first()                         | 将该列放在该表「首位」 (MySQL)                               |
| ->from($integer)                  | 设置自动递增字段的起始值 (MySQL / PostgreSQL)                |
| ->nullable($value = true)         | 允许 NULL 值插入到该列                                       |
| ->storedAs($expression)           | 创建一个存储生成的列 (MySQL)                                 |
| ->unsigned()                      | 设置 INTEGER 类型的字段为 UNSIGNED (MySQL)                   |
| ->useCurrent()                    | 设置 TIMESTAMP 类型的列使用 CURRENT_TIMESTAMP 作为默认值     |
| ->useCurrentOnUpdate()            | 将 TIMESTAMP 类型的列设置为在更新时使用 CURRENT_TIMESTAMP 作为新值 |
| ->virtualAs($expression)          | 创建一个虚拟生成的列 (MySQL)                                 |
| ->generatedAs($expression)        | 使用指定的序列选项创建标识列 (PostgreSQL)                    |
| ->always()                        | 定义序列值优先于标识列的输入 (PostgreSQL)                    |

#### 修改字段

在修饰字段之前，请确保你已经通过 Composer 包管理器安装了 doctrine/dbal 包。Doctrine DBAL 库用于确定字段的当前状态， 并创建对该字段进行指定调整所需的 SQL 查询

```shell
composer require doctrine/dbal
```

#### 更新字段属性

`change` 方法可以将现有的字段类型修改为新的类型或修改属性。 比如，你可能想增加。字符串字段的长度，可以使用 `change` 方法把 `name` 字段的长度从 25 增加到 50

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('name', 50)->change();
});
```

同样可以使用 `nullable` 将字段修改为允许为空

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('name', 50)->nullable()->change();
});
```

只有以下字段类型能被 `修改`

```php
bigInteger, binary, boolean, date, dateTime, dateTimeTz, decimal, integer,
json, longText, mediumText, smallInteger, string, text, time,
unsignedBigInteger, unsignedInteger, unsignedSmallInteger, 和 uuid, timestamp
```

#### 重命名字段

可以使用结构生成器上的 `renameColumn` 方法来重命名字段。在重命名字段前， 请确保你的 composer.json 文件内已经加入 `doctrine/dbal` 依赖

```php
Schema::table('users', function (Blueprint $table) {
    $table->renameColumn('from', 'to');
});
```

**当前不支持 enum 类型的字段重命名**

#### 删除字段

可以使用结构生成器上的 `dropColumn` 方法来删除字段。如果使用的是 SQLite 数据库，必须在调用 `dropColumn` 方法之前通过 Composer 包管理器安装了 `doctrine/dbal` 包

```php
Schema::table('users', function (Blueprint $table) {
    $table->dropColumn('votes');
});
```

可以传递一个字段数组给 `dropColumn` 方法来删除多个字段

```php
Schema::table('users', function (Blueprint $table) {
    $table->dropColumn(['votes', 'avatar', 'location']);
});
```

**不支持在使用 SQLite 数据库时在单个迁移中删除或修改多个字段**

#### 可用的命令别名

| 命令                             | 说明                                     |
| :------------------------------- | :--------------------------------------- |
| $table->dropMorphs('morphable'); | 删除 morphable_id 和 morphable_type 字段 |
| $table->dropRememberToken();     | 删除 remember_token 字段                 |
| $table->dropSoftDeletes();       | 删除 deleted_at 字段                     |
| $table->dropSoftDeletesTz();     | dropSoftDeletes() 方法的别名             |
| $table->dropTimestamps();        | 删除 created_at 和 updated_at 字段       |
| $table->dropTimestampsTz();      | dropTimestamps() 方法别名                |

> ### 索引

#### 创建索引

结构生成器支持多种类型的索引。首先，先指定字段值唯一，即简单地在字段定义 之后链式调用 `unique` 方法来创建索引，例如

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('users', function (Blueprint $table) {
    $table->string('email')->unique();
});
```

或者，也可以在定义完字段之后创建索引。例如

```php
$table->unique('email');
```

甚至可以将数组传递给索引方法来创建一个复合（或合成）索引

```php
$table->index(['account_id', 'created_at']);
```

Laravel 会自动生成一个合理的索引名称，但也可以传递第二个参数来自定义索引名称

```php
$table->unique('email', 'unique_email');
```

#### 可用的索引类型

| 命令                                  | 说明                          |
| :------------------------------------ | :---------------------------- |
| $table->primary('id');                | 添加主键                      |
| $table->primary(['id', 'parent_id']); | 添加复合主键                  |
| $table->unique('email');              | 添加唯一索引                  |
| $table->index('state');               | 添加普通索引                  |
| $table->spatialIndex('location');     | 添加空间索引（不支持 SQLite） |

#### 索引长度 & MySQL / MariaDB

默认情况下，Laravel 使用 `utf8mb4` 编码。如果你是在版本低于 5.7.7 的 MySQL 或者版本低于 10.2.2 的 MariaDB 上创建索引，那就需要手动配置数据库迁移的默认字符串长度。 也就是说，你可以通过在 `App\Providers\AppServiceProvider` 类的 boot 方法中调用 `Schema::defaultStringLength` 方法来配置默认字符串长度：

```php
use Illuminate\Support\Facades\Schema;

/**
 * 引导任何应用程序「全局配置」
 *
 * @return void
 */
public function boot()
{
    Schema::defaultStringLength(191);
}
```

当然，你也可以选择开启数据库的 `innodb_large_prefix` 选项。至于如何正确开启，请自行查阅数据库文档

#### 重命名索引

若要重命名索引，需要调用 `renameIndex` 方法。此方法接受当前索引名称作为其第一个参数，并将所需名称作为其第二个参数

```php
$table->renameIndex('from', 'to')
```

#### 删除索引

若要移除索引， 则必须指定索引的名称。Laravel 默认会自动给索引分配合理的名称。其将数据表名称、索引的字段名称及索引类型简单地连接在了一起。举例如下

| 命令                                                   | 说明                                       |
| :----------------------------------------------------- | :----------------------------------------- |
| $table->dropPrimary('users_id_primary');               | 从 「users」 表中删除主键                  |
| $table->dropUnique('users_email_unique');              | 从 「users」 表中删除 unique 索引          |
| $table->dropIndex('geo_state_index');                  | 从 「geo」 表中删除基本索引                |
| $table->dropSpatialIndex('geo_location_spatialindex'); | 从 「geo」 表中删除空间索引（不支持 SQLite |

如果将字段数组传给 `dropIndex` 方法，会删除根据表名、字段和键类型生成的索引名称

```php
Schema::table('geo', function (Blueprint $table) {
    $table->dropIndex(['state']); // 删除 'geo_state_index' 索引
});
```

#### 外键约束

Laravel 还支持创建用于在数据库层中的强制引用完整性的外键约束。例如，让我们在 posts 表上定义一个引用 users 表的 id 字段的 user_id 字段：

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

Schema::table('posts', function (Blueprint $table) {
    $table->unsignedBigInteger('user_id');

    $table->foreign('user_id')->references('id')->on('users');
});
```

由于这种外键约束的定义方式过于繁复，Laravel 额外提供了更简洁的方法，基于约定来提供更好的开发人员体验。上面的示例还可以这么写：

```php
Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')->constrained();
});
```

`foreignId` 方法是 `unsignedBigInteger` 的别名，而 `constrained` 方法将使用约定来确定所引用的表名和列名。如果表名与约定不匹配，可以通过将表名作为参数传递给 constrained 方法来指定表名：

```php
Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')->constrained('users');
});
```

可以为约束的「on delete」和「on update」属性指定所需的操作：

```php
$table->foreignId('user_id')
      ->constrained()
      ->onUpdate('cascade')
      ->onDelete('cascade');
```

当使用任意 字段修饰符 的时候，必须在调用 constrained 之前调用：

```php
$table->foreignId('user_id')
      ->nullable()
      ->constrained();
```

#### 删除外键

要删除一个外键，你需要使用 `dropForeign` 方法，将要删除的外键约束作为参数传递。外键约束采用的命名方式与索引相同。即，将数据表名称和约束的字段连接起来，再加上 `_foreign` 后缀：

```php
$table->dropForeign('posts_user_id_foreign');
```

或者，可以给 `dropForeign` 方法传递一个数组，该数组包含要删除的外键的列名。数组将根据 Laravel 的 结构生成器使用的约束名称约定自动转换：

```php
$table->dropForeign(['user_id']);
```

#### 更改外键约束

可以在迁移文件中使用以下方法来开启或关闭外键约束：

```php
Schema::enableForeignKeyConstraints();

Schema::disableForeignKeyConstraints();
```

> ### 数据库填充

Laravel 可以用 `seed` 类轻松地为数据库填充测试数据。所有的 seed 类都存放在 `database/seeds` 目录下。你可以任意为 `seed` 类命名，但是更应该遵守类似 `UsersTableSeeder` 的命名规范。Laravel 默认定义的一个 `DatabaseSeeder` 类。可以在这个类中使用 `call` 方法来运行其它的 `seed` 类从而控制数据填充的顺序

#### 编写 Seeders

运行 Artisan 命令 `make:seeder` 生成 Seeder，框架生成的 seeders 都放在 `database/seeders` 目录下：

```php
php artisan make:seeder UserSeeder
```

在默认的 `DatabaseSeeder` 类中的 `run` 方法中添加一条数据插入语句

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * 执行数据库填充
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}
```

#### 使用模型工厂

手动为每个模型填充指定属性很麻烦。作为替代方案，你可以使用 model 工厂 轻松地生成大量数据库数据。

例如，创建 50 个用户并为每个用户创建关联

```php
use App\Models\User;

/**
 * 执行数据库填充
 *
 * @return void
 */
public function run()
{
    User::factory()
            ->count(50)
            ->hasPosts(1)
            ->create();
}
```

#### 调用其他 Seeders

在 `DatabaseSeeder` 类中，你可以使用 `call` 方法来运行其它的 `seed` 类。使用 call 方法可以将数据填充拆分成多个文件，这样就不会使单个 `seeder` 变得非常大。只需简单传递要运行的 `seeder` 类名称即可

```php
/**
 * 执行数据库填充
 *
 * @return void
 */
public function run()
{
    $this->call([
        UserSeeder::class,
        PostSeeder::class,
        CommentSeeder::class,
    ]);
}
```

#### 运行 Seeders

可以使用 Artisan 命令 `db:seed` 来填充数据库。默认情况下， `db:seed` 命令将运行 `Database\Seeders\DatabaseSeeder` 类，这个类又可以调用其他 seed 类。不过，您也可以使用 `--class` 选项来指定一个特定的 seeder 类

```php
php artisan db:seed

php artisan db:seed --class=UserSeeder
```

还可以使用 `migrate:fresh` 命令结合 `--seed` 选项，这将删除数据库中所有表并重新运行所有迁移。此命令对于完全重建数据库非常有用

```php
php artisan migrate:fresh --seed
```

## 表单验证

Laravel 提供了几种不同的方法来验证传入应用程序的数据。最常见的做法是在所有传入的 HTTP 请求中使用 `validate`方法。

> ### 快速验证

#### 定义路由

首先，在 routes/web.php 路由文件中定义了下面这些路由

```php
use App\Http\Controllers\PostController;

// 页面路由
Route::get('/post/index', [PostController::class, 'index']);

// 处理提交数据的路由
Route::post('/post/add', [PostController::class, 'add']);
```

#### 创建控制器

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * 显示创建博客文章的表单。
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('post.create');
    }

    /**
     * 存储一篇新的博客文章。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        // 验证并存储博客文章...
    }
}
```

#### 编写验证逻辑

将使用 `Illuminate\Http\Request` 类提供的 `validate` 方法。如果验证通过，你的代码会继续正常运行。如果验证失败，则会抛出异常，并自动将对应的错误响应返回给用户。验证规则可以以`|`分割字符串写法或者以数组写法，如下：

```php
use Illuminate\Http\Request;

public function store(Request $request)
{
    $validated = $request->validate([

        // 字符串写法
        'title' => 'required|unique:posts|max:255',
        // 数组写法
        'title' => ['required', 'unique:posts', 'max:255'],
        'body' => 'required',
    ]);

    // 博客文章验证通过...
}
```

希望某个字段在第一次验证失败后就停止运行验证规则，只需要将 bail 添加到规则中

```php
$request->validate([
    'title' => 'bail|required|unique:posts|max:255',
    'body' => 'required',
]);
```

请求包含「嵌套」参数， 你可以在验证规则中使用「点」语法来指定这些参数

```php
$request->validate([
    'title' => 'required|unique:posts|max:255',
    'author.name' => 'required',
    'author.description' => 'required',
]);
```

#### 显示验证错误信息

如果传入的请求参数未通过给定的验证规则呢？正如前面所提到的，Laravel 会自动将用户重定向到之前的位置。另外，所有的验证错误信息和 请求输入 都将自动存储到 闪存 `session` 中

```php
<!-- /resources/views/post/index.blade.php -->

<h1>Create Post</h1>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<!-- Create Post Form -->
```

##### `@error` 指令

也可以使用 `@error` Blade 指令方便地检查给定的属性是否存在验证错误信息。在 `@error` 指令中，你可以输出 `$message` 变量以显示错误信息

```php
<!-- /resources/views/post/index.blade.php -->

<label for="title">Post Title</label>

<input id="title" type="text" class="@error('title') is-invalid @enderror">

@error('title')
    <div class="alert alert-danger">{{ $message }}</div>
@enderror
```

#### 自定义错误消息

##### 第一种自定义错误信息

Laravel 的内置验证规则每个都有一条错误消息，位于应用程序的 resources/lang/en/validation.php 文件中。在此文件中，你将找到每个验证规则的翻译条目。你可以根据应用程序的需求随意更改或修改这些消息。

此外，你可以将此文件复制到另一个翻译语言的目录中，以翻译应用程序语言的消息。要了解有关 Laravel 本地化的更多信息，请查看完整的 [本地化文档](https://learnku.com/docs/laravel/8.5/localization)

##### 第二种自定义错误信息

```php
 <?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// 引入Validator 门面 
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * 显示创建博客文章的表单。
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('post.create');
    }

    /**
     * 存储一篇新的博客文章。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        // 验证规则
        $rules = [
            'title' => 'required|unique:posts|max:255',
            'author.name' => 'required',
            'author.description' => 'required',
        ];

        // 错误提示信息
        $message = [
            'title.required' => '标题必填',
            'title.unique' => '该标题已存在，请更换标题',
            'title.max' => '标题可输入255个字符',
            'author.name' => '作者名字必填',
            'author.description' => '作者简介必填'
        ];

        // make 方法将会生成一个新的验证器实例
        $validator = Validator::make($request->all(), $rules,$message);

        if($validator->fails())
        {
            // withErrors 方法将错误信息存储至 session 中。使用该方法时，$errors 会自动与之后的视图共享，将其回显给用户
            return redirect('/post/index')->withErrors($validator)->withInput();
        }
    }
}
```

`make`方法中的第一个参数是期望校验的数据。第二个参数是应用到数据上的校验规则。

#### 重新填写表单

当 Laravel 由于验证错误而生成重定向响应时，框架将自动 将所有请求的输入闪存到 `session` 中。 这样做是为了方便你在下一个请求期间访问输入，并重新填充用户尝试提交的表单。

要从先前的请求中检索闪存的输入，请在 `Illuminate\Http\Request` 的实例上调用 `old` 方法。 `old` 方法将从 `session` 中提取先前闪存的输入数据

```php
$title = $request->old('title');
```

Laravel 还提供了一个全局性的 `old`。如果要在 Blade 模板 中显示旧输入，则使用 `old` 来重新填充表单会更加方便。如果给定字段不存在旧输入，则将返回 `null`

```php
<input type="text" name="title" value="{{ old('title') }}">
```

如果某个字段属于可选字段，但是 `null` 会被验证器标识为非法，如果不想被验证器标识为非法的话，那么需要将 `nullable` 添加到可选字段规则

```php
$request->validate([
    'title' => 'required|unique:posts|max:255',
    'body' => 'required',
    'publish_at' => 'nullable|date',
]);
```

> ### 验证表单请求

创建表单请求验证

```php
php artisan make:request StorePostRequest
```

该命令生成的类将被置于 `app/Http/Requests` 目录中。如果这个目录不存在，在运行 `make:request`命令后将会创建这个目录。Laravel `生成的每个表单请求都有两种方法：authorize` 和 `rules`

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * 判断用户是否有请求权限
     *
     * @return bool
     */
    public function authorize()
    {
        // 授权验证 别问为什么，就是要返回true
        return true;
    }

    /**
     * 获取应用于该请求的验证规则
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:posts|max:255',
            'author.name' => 'required',
            'author.description' => 'required',
        ];
    }

    /**
     * 定义验证规则的错误消息
    */
    public function messages()
    {
        return [
            'title.required' => '标题必填',
            'title.unique' => '该标题已存在，请更换标题',
            'title.max' => '标题可输入255个字符',
            'author.name' => '作者名字必填',
            'author.description' => '作者简介必填'
        ];
    }
}
```

使用该表单请求验证

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;

class PostController extends Controller
{
    /**
     * 显示创建博客文章的表单。
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('post.create');
    }

    /**
     * 存储一篇新的博客文章。
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(StorePostRequest $request)
    {
        // 获取通过验证的数据...
        $validated = $request->validated();
    }
}
```

> ### 可用验证规则

[可用的验证规则](https://learnku.com/docs/laravel/8.5/validation/10378#189a36)

## 视图 && blade模板引擎

`Blade` 是由 Laravel 提供的非常简单但功能强大的模板引擎，不同于其他流行的 PHP 模板引擎，`Blade` 在视图中并不约束你使用 PHP 原生代码。所有的 `Blade` 视图最终都会被编译成原生 PHP 代码并缓存起来直到被修改，这意味着对应用的性能而言 `Blade` 基本上是零开销。`Blade` 视图文件使用 .`blade.php` 文件扩展并存放在 `resources/views` 目录下。

> ### 创建 & 渲染视图

直接从路由和控制器返回整个 HTML 文档字符串是不实际的，视图提供了一种方便的方法，可以将所有的 HTML 放在不同的文件中。视图将控制器 / 应用逻辑与显示逻辑分开，并存储在 `resources/views` 目录下。一个简单的视图如下所示

```html
<!-- 本段代码存储在 resources/views/greeting.blade.php -->

<html>
    <body>
        <h1>Hello, {{ $name }}</h1>
    </body>
</html>
```

将上述代码存储在 `resources/views/greeting.blade.php` 后，我们可以使用全局辅助函数 `view` 将其返回，如下所示

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

也可以使用 `View` facade 返回视图

```php
use Illuminate\Support\Facades\View;

return View::make('greeting', ['name' => 'James']);
```

视图也可以嵌套在 `resources/views` 目录的子目录中。. 符号可用于引用嵌套视图。例如，如果你的视图存放在 `resources/views/admin/profile.blade.php`，你可以在应用的路由或者控制器中使用如下所示方法返回视图

```php
return view('admin.profile', $data);
```

#### 向所有视图分享数据

有时候，你可能需要共享一段数据给应用程序的所有视图。你可以使用 `View` facade 的 `share` 方法来实现。通常情况下，你可以在服务提供器的 `boot` 方法中调用 `share` 方法。你可以把他们添加到 `App\Providers\AppServiceProvider` 类，或者为它们生成一个单独的服务提供器

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * 注册应用服务
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * 引导应用服务
     *
     * @return void
     */
    public function boot()
    {
        View::share('key', 'value');
    }
}
```

> ### blade模板引擎

#### 在blade模板输出函数

```php
The current UNIX timestamp is {{ time() }}.
```

#### 展示非转义数据

要输出带 HTML 元素的富文本，可以使用如下语法

```php
Hello, {!! $name !!}.
```

#### 渲染 JSON

有时，您可能会将数组传递给视图，以将其呈现为 JSON，以便初始化 JavaScript 变量。 例如

```php
<script>
    var app = <?php echo json_encode($array); ?>;
</script>
```

也可以使用 `@json` Blade 指令来代替手动调用 `json_encode` 方法。 @json 指令的参数和 PHP 的 `json_encode` 函数一致

```php
<script>
    var app = @json($array);

    var app = @json($array, JSON_PRETTY_PRINT);
</script>
```

#### Blade & JavaScript 框架

由于许多 JavaScript 框架也使用「花括号」来标识将显示在浏览器中的表达式，因此，可以使用 @ 符号来表示 Blade 渲染引擎应当保持不变。例如

```php
<h1>Laravel</h1>

Hello, @{{ name }}.
```

在这个例子中， @ 符号将被 Blade 移除；当然，Blade 将不会修改 `{{ name }}` 表达式，取而代之的是 JavaScript 模板来对其进行渲染

```php
{{-- Blade 模板 --}}
@@json()

<!-- HTML 输出 -->
@json()
```

#### @verbatim 指令

```php
@verbatim
    <div class="container">
        Hello, {{ name }}.
    </div>
@endverbatim
```

#### Blade 指令

除了模板继承和显示数据以外， Blade 还为常见的 PHP 控制结构提供了便捷的快捷方式，例如条件语句和循环。这些快捷方式为 PHP 控制结构提供了一个非常清晰、简洁的书写方式，同时，还与 PHP 中的控制结构保持了相似的语法特性

##### If 语句

```php
@if (count($records) === 1)
    // 有一条记录
@elseif (count($records) > 1)
    // 多条记录
@else
    // 没有记录
@endif
```

为了方便， Blade 还提供了一个 @unless 指令

```php
@unless (Auth::check())
    // 还没有登录
@endunless
```

相当于 `@if (! Auth::check()) @endif`

除了上面所说条件指令外， @isset 和 @empty 指令亦可作为它们所对应的 PHP 函数的快捷方式

```php
@isset($records)
    // $records 已经被定义且不为 null ……
@endisset

@empty($records)
    // $records 为「空」……
@endempty
```

##### 授权指令

@auth 和 @guest 指令可用于快速判断当前用户是否已经获得 授权 或是游客：

```php
@auth
    // 用户已经通过认证……
@endauth

@guest
    // 用户没有通过认证……
@endguest
```

如有需要，也可在使用 @auth 和 @guest 指令时指定鉴权守卫：

```php
@auth('admin')
    // 用户已经通过认证……
@endauth

@guest('admin')
    // 用户没有通过认证……
@endguest
```

##### 环境指令

可以使用 @production 指令来判断当前应用是否处于生产环境：

```php
@production
    // 生产环境执行的逻辑语句……
@endproduction
```

或者，您可以使用 @env 指令确定应用程序是否在特定环境中运行：

```php
@env('staging')
    // 该应用运行在 「staging」 环境中...
@endenv

@env(['staging', 'production'])
    // 该应用运行在 「staging」和 「production」 环境中...
@endenv
```

##### hasSection 指令

```php
您可以使用 `@hasSection` 指令确定模板继承节是否包含内容：

@hasSection('navigation')
    <div class="pull-right">
        @yield('navigation')
    </div>

    <div class="clearfix"></div>
@endif
```

你可以使用 `@sectionMissing` 指令来确定节是否没有内容

```php
@sectionMissing('navigation')
    <div class="pull-right">
        @include('default-navigation')
    </div>
@endif
```

##### Switch 语句

```php
@switch($i)
    @case(1)
        第一个用例 ...
        @break

    @case(2)
        第二个用例 ...
        @break

    @default
        其他用例 ...
@endswitch
```

##### 循环

```php
@for ($i = 0; $i < 10; $i++)
    当前的值是 {{ $i }}
@endfor

@foreach ($users as $user)
    <p>这是 {{ $user->id }} 用户</p>
@endforeach

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>没有用户</p>
@endforelse

@while (true)
    <p>我正在循环，直到天荒地老</p>
@endwhile
```

使用循环时，还可以使用 @continue 和 @break 指令结束循环或跳过当前循环

```php
@foreach ($users as $user)
    @if ($user->type == 1)
        @continue
    @endif

    <li>{{ $user->name }}</li>

    @if ($user->number == 5)
        @break
    @endif
@endforeach
```

##### 循环变量

循环时，可以在循环内使用 `$loop` 变量将在你的循环中可用。这个变量提供了一些有用的信息，比如当前循环的索引，以及这是循环的第一次还是最后一次迭代

```php
@foreach ($users as $user)
    @if ($loop->first)
        这是第一次迭代。
    @endif

    @if ($loop->last)
         这是最后一个迭代。
    @endif

    <p>This is user {{ $user->id }}</p>
@endforeach
```

如果你在一个嵌套循环中，你可以通过 `parent` 属性访问父循环的 `$loop` 变量

```php
@foreach ($users as $user)
    @foreach ($user->posts as $post)
        @if ($loop->parent->first)
            这是父循环的第一次迭代。
        @endif
    @endforeach
@endforeach
```

`$loop` 变量还包含了其他一些有用的属性

| 属性             | 描述                             |
| :--------------- | :------------------------------- |
| $loop->index     | 当前循环迭代的索引 (从 0 开始)。 |
| $loop->iteration | 在当前循环迭代时 (从 1 开始)。   |
| $loop->remaining | 循环中剩余的迭代。               |
| $loop->count     | 数组中被迭代项的总个数。         |
| $loop->first     | 这是否是循环的第一次迭代。       |
| $loop->last      | 这是否是循环的最后一次迭代。     |
| $loop->even      | 这是否是循环中的偶数迭代。       |
| $loop->odd       | 这是否是循环中的奇数次迭代。     |
| $loop->depth     | 当前循环的嵌套级别。             |
| $loop->parent    | 在嵌套循环中，父循环变量。       |

##### 注释

```php
{{-- 这个注释将不会显示在 HTML 中 --}}
```

##### 引入子视图

Blade 的 `@include` 指令允许您从一个视图中包含另外一个 Blade 视图。父视图中的所有变量在子视图中都可以使用

```php
<div>
    @include('shared.errors')

    <form>
        <!-- 表单内容 -->
    </form>
</div>
```

子视图可以继承父视图中所有可以使用的数据，但是您也可以传递一个额外的数组，这个数组在子视图中也可以使用:

```php
@include('view.name', ['status' => 'complete'])
```

注意：在视图中，您应该避免使用 `__DIR__` 和 `__FILE__` 这些常量，因为他们将引用已缓存的和已编译的视图.

> ### 组件布局

#### 定义布局组件

```php
<!-- resources/views/components/layout.blade.php -->

<html>
    <head>
        <title>{{ $title ?? 'Todo Manager' }}</title>
    </head>
    <body>
        <h1>Todos</h1>
        <hr/>
        {{ $slot }}
    </body>
</html>
```

#### 应用布局组件

```php
<!-- resources/views/tasks.blade.php -->
// 使用布局组件
<x-layout>
    // 使用title插槽
    <x-slot name="title">
        Custom Title
    </x-slot>

    @foreach ($tasks as $task)
        {{ $task }}
    @endforeach
</x-layout>
```

现在我们已经定义了布局和任务列表视图，我们只需要从路由中返回 task 视图即可

```php
use App\Models\Task;

Route::get('/tasks', function () {
    return view('tasks', ['tasks' => Task::all()]);
});
```

> ### 模板继承

#### 定义一个布局

```php
<!-- resources/views/layouts/app.blade.php -->

<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        // 定义内容的一部分
        @section('sidebar')
            这是一个主要的侧边栏
        @show

        <div class="container">
            {{-- 用于显示给定部分的内容 --}}
            @yield('content')
        </div>
    </body>
</html>
```

#### 继承布局

```php
<!-- resources/views/child.blade.php -->

// 继承模板布局
@extends('layouts.app')

// 将内容注入模板布局的节点中
@section('title', 'Page Title')

@section('sidebar')
    // 将内容追加（而不是覆盖）到局部的侧栏位置
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

// 把这些部分的内容在模板布局显示
@section('content')
    <p>This is my body content.</p>
@endsection
```

> ### 表单

#### CSRF 字段

在laravel中定义 HTML 表单，都应该在表单中包含一个隐藏的 CSRF 令牌字段，以便 [CSRF 保护中间件](https://learnku.com/docs/laravel/8.5/csrf/9367) 可以验证请求。你可以使用 `@csrf` Blade 指令生成令牌字段

```php
<form method="POST" action="/profile">
    @csrf

    ...
</form>
```

#### Method 字段

于 HTML 表单不能发出 `PUT`、`PATCH` 或 `DELETE` 请求，因此需要添加一个隐藏的 `_method` 字段来欺骗这些 `HTTP` 动词。`@method` Blade 指令可以为你创建此字段

```php
<form action="/foo/bar" method="POST">
    @method('PUT')

    ...
</form>
```

#### 表单校验错误

`@error` 指令可用于快速检查给定属性是否存在 验证错误消息 。在 `@error` 指令中，可以回显 `$message` 变量以显示错误消息

```php
<label for="title">Post Title</label>

<input id="title" type="text" class="@error('title') is-invalid @enderror">

@error('title')
    <div class="alert alert-danger">{{ $message }}</div>
@enderror
```

你可以将 [特定错误包的名称](https://learnku.com/docs/laravel/8.5/validation#named-error-bags) 作为第二个参数传递给 @error 指令，以便在包含多个表单的页面上检索验证错误消息

```php
<label for="email">Email address</label>

<input id="email" type="email" class="@error('email', 'login') is-invalid @enderror">

@error('email', 'login')
    <div class="alert alert-danger">{{ $message }}</div>
@enderror
```

#### 原生 PHP

在某些情况下，将 PHP 代码嵌入到视图中是很有用的。您可以使用 Blade `@php` 指令在模板中执行一个普通 php 语句：

```php
@php
    $counter = 1;
@endphp
```

#### 堆栈

Blade 可以被推送到在其他视图或布局中的其他位置渲染的命名堆栈。这在子视图中指定所需的 JavaScript 库时非常有用：

```php
@push('scripts')
    <script src="/example.js"></script>
@endpush
```

可以根据需要多次推入堆栈。要呈现完整的堆栈内容，请将堆栈的名称传递给 `@stack` 指令

```php
<head>
    <!-- Head Contents -->

    @stack('scripts')
</head>
```

如果要将内容前置到堆栈的开头，应使用 `@prepend` 指令

```php
@push('scripts')
    这是第二加载的...
@endpush

// Later...

@prepend('scripts')
    这是第一加载的...
@endprepend
```

## 杂项

> ### Cookie

#### 设置Cookie

```php
// 引入 Cookie
use Illuminate\Support\Facades\Cookie;

// 写入Cookie
$Cookie = Cookie::make('LoginUser','admin',time());

// 加入队列
Cookie::queue($Cookie);
```

#### 获取Cookie

```php
Cookie::get('LoginUser');
```

#### 删除Cooekie

```php
// 把Cookie 的有效期（Expires/Max-Age）设置成过去时即可
$LoginUser = Cookie::forget('LoginUser');

Cookie::queue($LoginUser);
```

#### cookie 是否存在

```php
dd(Cookie::has('LoginUser'));
```

#### Cookies 和 加密

默认情况下，由 Laravel 生成的所有 cookie 都经过了加密和签名，因此客户端无法篡改或读取它们。如果要对应用程序生成的部分 cookie 禁用加密，可以使用 App\Http\Middleware\EncryptCookies 中间件的 $except 属性，该属性位于 App/Http/Middleware 目录中

```php
/**
 * 这个名字的 Cookie 将不会加密
 *
 * @var array
 */
protected $except = [
    'cookie_name',
];
```

> ### Session

#### 设置session

```php
// 通过 Request ...
$request->session()->put('key', 'value');

// 通过全局 Session 助手函数 ...
session(['key' => 'value']);

// 一次性session
$request->session()->flash('status', 'Task was successful!');
```

push 方法可以把一个新值推入到以数组形式存储的 session 值里。例如：如果 user.teams 键值对有一个关于团队名字的数组，你可以推入一个新值到这个数组里：

```php
$request->session()->push('user.teams', 'developers');
```

#### 获取Session

```php
// 获取所有的session
$data = $request->session()->all();

// 判断session是否存在
$request->session()->has('users');

// 获取单个session
$request->session()->get('key', 'default');

// 视图获取 session
{{ Session::get('user_name') }}
```

#### 删除Session

```php
// 删除一个单独的键值对 ...
$request->session()->forget('name');

// 删除多个 键值对 ...
$request->session()->forget(['name', 'status']);

$request->session()->flush();
```

#### 全局助手函数

```php
// 从 Session 获取数据 ...
$value = session('key');

// 设置默认值...
$value = session('key', 'default');

// 在Session 里存储一段数据 ...
session(['key' => 'value']);
```

> ### 分页(自定义分页样式)

操作步骤如下:

```php
(1)  对应public/css/paging.css 文件建立分页样式.
(2)  控制器查出分页数据使用 paginate函数进行分页处理.(禁止使用group by处理查询).
(3)  对应视图引入分页样式.
```

#### paging.css

```css
.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px
}

.pagination>li {
    display: inline
}

.pagination>li>a,
.pagination>li>span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd
}

.pagination>li:first-child>a,
.pagination>li:first-child>span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.pagination>li:last-child>a,
.pagination>li:last-child>span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}

.pagination>li>a:focus,
.pagination>li>a:hover,
.pagination>li>span:focus,
.pagination>li>span:hover {
    z-index: 2;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd
}

.pagination>.active>a,
.pagination>.active>a:focus,
.pagination>.active>a:hover,
.pagination>.active>span,
.pagination>.active>span:focus,
.pagination>.active>span:hover {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7
}

.pagination>.disabled>a,
.pagination>.disabled>a:focus,
.pagination>.disabled>a:hover,
.pagination>.disabled>span,
.pagination>.disabled>span:focus,
.pagination>.disabled>span:hover {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd
}

 /* 更改Layui以及bootstrap分页 水平居中 */
 .layui-laypage,.pagination{
    transform: translateX(-50%);
    margin-left: 50%;
  }
```

#### 控制器示例写法

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndexController extends Controller
{
    public function index(Request $request)
    {

        $test = DB::table('article')->paginate(5);

        return view('index', ['test' => $test]);

    }
}
```

#### 视图示例写法

```html
<!-- 输出分页 -->
{{$test->links()}}
```

#### app\Providers\AppServiceProvider.php

可以在 `App\Providers\AppServiceProvider` 服务提供者中的 boot 方法内调用分页器的 useBootstrap 方法替代默认的 Tailwind 视图

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

// 分页类
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 调用Bootstrap分页结构
        Paginator::useBootstrap();
    }
}
```

> ### 验证码扩展

#### 安装

```php
composer require mews/captcha
```

#### 修改config/app 文件

```php
// 在这添加 ServiceProvider
'providers' => [
    ...
    Mews\Captcha\CaptchaServiceProvider::class,
],

// 找到 aliases 数组在里面追加如下内容

'aliases' => [
    ...
    'Captcha' => Mews\Captcha\Facades\Captcha::class,
],
```

#### 运行 php artisan vendor:publish 生成配置文件 config/captcha.php

```shell
 Which provider or tag's files would you like to publish?:
  [0] Publish files from all providers and tags listed below
  [1] Provider: Facade\Ignition\IgnitionServiceProvider
  [2] Provider: Fruitcake\Cors\CorsServiceProvider
  [3] Provider: Illuminate\Foundation\Providers\FoundationServiceProvider
  [4] Provider: Illuminate\Mail\MailServiceProvider
  [5] Provider: Illuminate\Notifications\NotificationServiceProvider
  [6] Provider: Illuminate\Pagination\PaginationServiceProvider
  [7] Provider: Intervention\Image\ImageServiceProviderLaravelRecent
  [8] Provider: Laravel\Sail\SailServiceProvider
  [9] Provider: Laravel\Sanctum\SanctumServiceProvider
  [10] Provider: Laravel\Tinker\TinkerServiceProvider
  [11] Provider: Mews\Captcha\CaptchaServiceProvider
  [12] Tag: config
  [13] Tag: cors
  [14] Tag: flare-config
  [15] Tag: ignition-config
  [16] Tag: laravel-errors
  [17] Tag: laravel-mail
  [18] Tag: laravel-notifications
  [19] Tag: laravel-pagination
  [20] Tag: sail
  [21] Tag: sail-bin
  [22] Tag: sail-docker
  [23] Tag: sanctum-config
  [24] Tag: sanctum-migrations
 > 11
```

#### 运行发布指令后，它提示让我们选择发布哪个，这里选择Provider: Mews\Captcha\CaptchaServiceProvider就可以

#### config/captcha.php

```php
<?php

return [
    'characters' => ['2', '3', '4', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'm', 'n', 'p', 'q', 'r', 't', 'u', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'M', 'N', 'P', 'Q', 'R', 'T', 'U', 'X', 'Y', 'Z'],
    'default' => [
        'length' => 9,
        'width' => 120,
        'height' => 36,
        'quality' => 90,
        'math' => false,
        'expire' => 60,
        'encrypt' => false,
    ],
    'math' => [
        'length' => 9,
        'width' => 120,
        'height' => 36,
        'quality' => 90,
        'math' => true,
    ],

    'flat' => [
        'length' => 6,
        'width' => 160,
        'height' => 46,
        'quality' => 90,
        'lines' => 6,
        'bgImage' => false,
        'bgColor' => '#ecf2f4',
        'fontColors' => ['#2c3e50', '#c0392b', '#16a085', '#c0392b', '#8e44ad', '#303f9f', '#f57c00', '#795548'],
        'contrast' => -5,
    ],
    'mini' => [
        'length' => 3,
        'width' => 60,
        'height' => 32,
    ],
    'inverse' => [
        'length' => 5,
        'width' => 120,
        'height' => 36,
        'quality' => 90,
        'sensitive' => true,
        'angle' => 12,
        'sharpen' => 10,
        'blur' => 2,
        'invert' => true,
        'contrast' => -5,
    ],
];
```

#### 使用案例

```html
<div class="form-group code">
    <label>验证码</label>
    <input class="tt-text" name="captcha">
    {!! captcha_img() !!}
</div>


<div class="form-group code">
    <label>验证码</label>
    <input class="tt-text" name="captcha">
    <img src="{{captcha_src()}}">
</div>
```

#### 使用自定义样式的验证码

```php
return [
    ...

    'default' => [
        ...
    ],

    'code' => [
        'length'    => 4,
        'width'     => 120,
        'height'    => 36,
        'quality'   => 90,
        'sensitive' => true,
        'angle'     => 12,
        'sharpen'   => 10,
        'blur'      => 2,
        'invert'    => true,
        'contrast'  => -5,
    ]

];
```

#### 调用自定义配置

```php
<div class="form-group code">
    <label>验证码</label>
    <input class="tt-text" name="captcha">
    <img src="{{captcha_src('code')}}">
</div>
```

#### 判断用户输入的验证码是否正确

```php
$this->validate($request, [
    'captcha' => 'required|captcha'
]);
```

## Artisan控制台

#### 查看artisan命令

```shell
php artisan

php artisan list
```

#### 查看某个帮助命令

```shell
php artisan help make:model
```

#### 查看laravel版本

```shell
php artisan --version
```

#### 使用 PHP 内置的开发服务器启动应用

```shell
php artisan serve
```

#### 生成一个随机的 `key`，并自动更新到 `app/config/app.php` 的 key 键值对（刚安装好需要做这一步）

```shell
php artisan key:generate
```

#### 开启维护模式和关闭维护模式（显示503）

```shell
php artisan down

php artisan up
```

#### 进入tinker工具

```shell
php artisan tinker
```

#### 列出所有的路由

```shell
php artisan route:list
```

#### 生成路由缓存以及移除缓存路由文件

```shell
php artisan route:cache

php artisan route:clear
```

#### 创建控制器

```shell
php artisan make:controller StudentController
```

#### 创建Rest风格资源控制器（带有index、create、store、edit、update、destroy、show方法）

```shell
php artisan make:controller PhotoController --resource
```

#### 创建模型

```shell
php artisan make:model Student
```

#### 创建新建表的迁移和修改表的迁移

```shell
# 创建students表
php artisan make:migration create_users_table --create=students 

# 压缩迁移
php artisan schema:dump

# 转储当前数据库架构并删除所有现有迁移。。。
php artisan schema:dump --prune

# 指定新建表的迁移位置
php artisan make:migration --path=指定路径 create_logistics_deliver_team_table

php artisan make:migration --path=database/migrations/logistics create_logistics_deliver_team_table

# 给students表增加votes字段
php artisan make:migration add_votes_to_users_table --table=students

# 指定更新表的迁移位置
php artisan make:migration --path=指定路径 create_logistics_deliver_team_table --table=表名

php artisan make:migration --path=database/migrations/logistics update_logistics_deliver_team_table--table=logistics_deliver_team
```

#### 执行迁移

```shell
php artisan migrate

# 指定迁移
php artisan migrate --path=/database/migrations/文件夹（文件夹下放入迁移文件）
```

#### 创建模型的时候同时生成新建表的迁移

```shell
php artisan make:model Student -m
```

#### 回滚上一次的迁移

```shell
php artisan migrate:rollback
```

#### 回滚所有迁移

```shell
php artisan migrate:reset

php artisan migrate:fresh

php artisan migrate:fresh --seed

php artisan migrate:rollback
```

#### 创建填充

```shell
php artisan make:seeder StudentTableSeeder
```

#### 执行单个填充

```shell
php artisan db:seed --class=StudentTableSeeder
```

#### 执行所有填充

```shell
php artisan db:seed
```

#### 创建中间件（app/Http/Middleware下）

```shell
php artisan make:middleware Activity
```

#### 创建队列（数据库）的表迁移（需要执行迁移才生效）

```shell
php artisan queue:table
```

#### 创建队列类（app/jobs下）

```shell
php artisan make:job SendEmail
```

#### 创建请求类（app/Http/Requests下）

```shell
php artisan make:request CreateArticleRequest
```