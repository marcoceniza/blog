<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user')->latest()
                                   ->get();

        $userPosts = Post::with('user')->where('user_id', Auth::id())
                                      ->latest()
                                      ->get();

        return response()->json([
            'success' => true,
            'message' => 'Fetch posts successfully.',
            'userPosts' => $userPosts,
            'result' => $posts
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|min:4',
            'content' => 'required:min:4'
        ]);

        Post::create([...$validated, 'user_id' => Auth::id()]);

        return response()->json([
            'success' => true,
            'message' => 'Added post successfully.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $post = Post::findOrFail($id);

        return response()->json([
            'success' => true,
            'message' => 'Retrieve post successfully.',
            'result' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|min:4',
            'content' => 'required:min:4'
        ]);

        $post->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Updated post successfully.'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json([
            'success' => true,
            'message' => 'Deleted post successfully.'
        ]);
    }
}
