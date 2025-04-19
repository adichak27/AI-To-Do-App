'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODOS } from '@/graphql/queries/todos';
import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO } from '@/graphql/mutations/todos';
import { Todo } from '@/types/todo';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, ClipboardIcon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EmptyState } from '@/components/ui/EmptyState';

export function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const { data, loading, error } = useQuery(GET_TODOS);
  const [createTodo] = useMutation(CREATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    await createTodo({
      variables: { title: newTodo },
      refetchQueries: [{ query: GET_TODOS }],
    });
    setNewTodo('');
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-[#eef1f8] p-4">
      <div className="mx-auto max-w-[650px] pt-12">
        <Card>
          <h1 className="mb-6 text-2xl font-semibold text-[#1A1D2F]">
            My Tasks
          </h1>

          <form onSubmit={handleSubmit} className="relative mb-8">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="h-[52px] rounded-[14px] border-[#00000014] pl-4 pr-[100px] text-base 
                       focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                       focus:border-[#5468FF] focus:shadow-[inset_0px_0px_0px_2px_rgba(84,104,255,0.1)]"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5468FF] 
                       hover:bg-[#4355E8]"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </form>

          <AnimatePresence>
            {data?.todos.length === 0 ? (
              <EmptyState />
            ) : (
              <ul className="space-y-4">
                {data?.todos.map((todo: Todo) => (
                  <motion.li
                    key={todo.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="group flex items-center justify-between rounded-lg 
                             bg-white p-4 hover:bg-[#F9FAFC]"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTodo({ variables: { id: todo.id } })}
                        className={`h-5 w-5 rounded-full border-2 transition-all
                                ${todo.completed 
                                  ? 'border-[#18C964] bg-[#18C964]' 
                                  : 'border-[#5F6580]'}`}
                      >
                        {todo.completed && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-3 w-3 text-white"
                            viewBox="0 0 12 12"
                          >
                            <path
                              fill="currentColor"
                              d="M3.5 6.5l2 2 4-4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </motion.svg>
                        )}
                      </button>
                      <span
                        className={`text-base text-[#1A1D2F] transition-all
                                ${todo.completed 
                                  ? 'line-through opacity-60' 
                                  : ''}`}
                      >
                        {todo.title}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTodo({ variables: { id: todo.id } })}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Trash2 className="h-4 w-4 text-[#FF3B3B]" />
                    </Button>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>

          <Button
            className="w-full mt-6 py-4 px-6 rounded-[14px] text-[15px] font-semibold text-white
                bg-gradient-to-r from-[#5468FF] to-[#7B86FF] 
                hover:shadow-[0_0_15px_rgba(84,104,255,0.4)] hover:scale-[1.02]
                active:scale-[0.98] transition-all duration-200 
                flex items-center justify-center"
            onClick={() => {
              // Implement AI todo generation
            }}
          >
          <Sparkles className="mr-2" size={18} />
            Generate Todo
          </Button>
        </Card>
      </div>
    </div>
  );
} 