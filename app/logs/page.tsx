"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LogFilters from "@/components/LogFilters";
import LogCard from "@/components/LogCard";
import LogModal from "@/components/LogModal";
import { LOGS, LogEntry } from "@/lib/logs";

function LogsContent() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [modalEntry, setModalEntry] = useState<LogEntry | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filter logs based on active filter
  const filteredLogs = LOGS.filter((log) => {
    if (activeFilter === "ALL") return true;
    
    // Check if filter matches type
    if (log.type === activeFilter) return true;
    
    // Check if filter matches tags
    if (log.tags?.includes(activeFilter)) return true;
    
    return false;
  });

  // Handle URL query param for deep linking
  useEffect(() => {
    const logId = searchParams.get("log");
    if (logId) {
      const entry = LOGS.find((log) => log.id === logId);
      if (entry) {
        setModalEntry(entry);
      }
    }
  }, [searchParams]);

  const handleOpenModal = (entry: LogEntry) => {
    setModalEntry(entry);
    // Update URL with query param
    router.push(`/logs?log=${entry.id}`, { scroll: false });
  };

  const handleCloseModal = () => {
    setModalEntry(null);
    // Remove query param
    router.push("/logs", { scroll: false });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-graphite py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="system-text text-white text-sm sm:text-base">
            0/9_SYSTEM / LOG_ARCHIVE
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <LogFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredLogs.map((log) => (
              <LogCard 
                key={log.id} 
                entry={log} 
                onOpen={handleOpenModal} 
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredLogs.length === 0 && (
            <div className="text-center py-20">
              <p className="system-text text-steel/60 text-sm">
                NO LOGS MATCH CURRENT FILTER
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <LogModal entry={modalEntry} onClose={handleCloseModal} />
    </main>
  );
}

export default function LogsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LogsContent />
    </Suspense>
  );
}
