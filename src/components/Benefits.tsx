import React from 'react';
import { benefits } from '../constants/benefits';

export default function Benefits() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-typewriter text-3xl md:text-4xl font-bold text-center mb-16 text-gold">
          Why Choose Ready Forest Solutions?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-dark/50 border border-gold/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest text-gold mb-4">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="font-typewriter text-xl font-semibold mb-2 text-gold">{benefit.title}</h3>
              <p className="text-gold-light font-sans">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}