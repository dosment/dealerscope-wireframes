import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductChange } from '@/types';
import Button from '@/components/ui/Button';

interface RecentChangesProps {
  changes: ProductChange[];
}

const RecentChanges: React.FC<RecentChangesProps> = ({ changes }) => {
  const router = useRouter();

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'removed':
        return (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--danger-100)' }}
          >
            <svg className="w-3 h-3" style={{ color: 'var(--text-danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </div>
        );
      case 'installed':
        return (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--warning-100)' }}
          >
            <svg className="w-3 h-3" style={{ color: 'var(--text-warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        );
      case 'replaced':
        return (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--info-100)' }}
          >
            <svg className="w-3 h-3" style={{ color: 'var(--text-info)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        );
      default:
        return (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--success-100)' }}
          >
            <svg className="w-3 h-3" style={{ color: 'var(--text-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  const getChangeDescription = (change: ProductChange) => {
    const changeVerb = change.changeType === 'removed' ? 'REMOVED' :
                     change.changeType === 'installed' ? 'INSTALLED' : 'REPLACED';

    return {
      title: `${changeVerb}: ${change.productName} at ${change.dealershipName}`,
      description: change.notes || `${change.changeType} ${formatTimeAgo(change.timestamp)}`,
      alertType: change.changeType === 'removed' ? 'OPPORTUNITY' :
                change.changeType === 'installed' && change.productName !== 'YourProduct' ? 'ALERT' : 'UPDATE'
    };
  };

  const recentChanges = changes.slice(0, 4); // Show last 4 changes

  return (
    <div
      className="rounded-lg"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--border-primary)'
      }}
    >
      <div
        className="px-4 py-3"
        style={{
          borderBottomWidth: '1px',
          borderBottomColor: 'var(--border-primary)'
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold theme-text-primary">Notifications</h2>
          <span className="text-xs theme-text-muted">24H</span>
        </div>
        <div className="mt-1 flex items-center space-x-3 text-xs">
          <span style={{ color: 'var(--text-danger)' }} className="font-medium">5 new</span>
          <span style={{ color: 'var(--text-warning)' }} className="font-medium">3 opps</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {recentChanges.map((change) => {
          const changeInfo = getChangeDescription(change);

          return (
            <div key={change.id} className="flex space-x-2">
              {getChangeIcon(change.changeType)}

              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium theme-text-primary leading-tight">
                  {changeInfo.title}
                </div>

                <div className="mt-0.5 text-xs theme-text-muted">
                  {formatTimeAgo(change.timestamp)}
                </div>

                <div className="mt-1">
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 text-xs font-medium rounded"
                    style={{
                      backgroundColor: changeInfo.alertType === 'OPPORTUNITY'
                        ? 'var(--warning-100)'
                        : changeInfo.alertType === 'ALERT'
                        ? 'var(--danger-100)'
                        : 'var(--info-100)',
                      color: changeInfo.alertType === 'OPPORTUNITY'
                        ? 'var(--text-warning)'
                        : changeInfo.alertType === 'ALERT'
                        ? 'var(--text-danger)'
                        : 'var(--text-info)'
                    }}
                  >
                    {changeInfo.alertType}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Action Buttons */}
        <div
          className="pt-3"
          style={{
            borderTopWidth: '1px',
            borderTopColor: 'var(--border-primary)'
          }}
        >
          <Button
            variant="secondary"
            size="sm"
            className="w-full text-xs"
            onClick={() => router.push('/alerts')}
          >
            View All Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentChanges;