<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $article = Article::all();
        return response()->json($article,200);
    }

    public function create(Request $request)
    {
        $article = new Article();
        $article->name = $request->name;
        $article->message = $request->message;
        $article->save();
        return response()->json($article,200);
    }

    public function delete($id)
    {
        Article::where('id',$id)->delete();
    }
}
