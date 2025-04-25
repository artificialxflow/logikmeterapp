import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const todos = await db.collection('todos').find({}).toArray();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    const todo = {
      title,
      completed: false,
      createdAt: new Date(),
    };

    const result = await db.collection('todos').insertOne(todo);
    return NextResponse.json({ ...todo, _id: result.insertedId });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
} 