import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Todo App
          </h1>
          <p className="text-lg text-gray-600">
            Organize your tasks, boost your productivity
          </p>
        </div>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100">
          <TodoList />
        </div>
      </div>
    </main>
  );
}
