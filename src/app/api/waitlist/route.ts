import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    // Parse request body
    const { email, shopify_url } = await request.json();

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists in waitlist
    const { data: existingEmail } = await supabase
      .from('emails')
      .select('*')
      .eq('email', email)
      .single();

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email is already on the waitlist' },
        { status: 400 }
      );
    }

    // Insert email into waitlist table with optional shopify URL
    const { error } = await supabase
      .from('emails')
      .insert([{ 
        email,
        shopify_url: shopify_url || null
      }]);

    if (error) {
      console.error('Error inserting into waitlist:', error);
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing waitlist request:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 