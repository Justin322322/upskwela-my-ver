'use client';

import { Button, Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components';
import { Printer, Download, X, Check } from 'lucide-react';

interface NDAModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export function NDAModal({ isOpen, onOpenChange, onAccept }: NDAModalProps) {
  const handlePrint = () => {
    const content = document.getElementById('nda-content');
    if (content) {
      // Create a hidden iframe for printing
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.top = '-10000px';
      iframe.style.left = '-10000px';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';

      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Non-Disclosure Agreement - Upskwela</title>
              <style>
                body { 
                  font-family: system-ui, -apple-system, sans-serif; 
                  margin: 2rem; 
                  line-height: 1.6; 
                  color: #000;
                  max-width: 65ch;
                  margin-left: auto;
                  margin-right: auto;
                }
                h1 { 
                  color: #0ea5e9; 
                  margin-bottom: 1rem; 
                  font-size: 24px;
                }
                h3 { 
                  color: #0ea5e9; 
                  margin-top: 1.5rem; 
                  margin-bottom: 0.5rem; 
                  font-size: 18px;
                }
                ul { 
                  margin-left: 1.5rem; 
                  margin-bottom: 1rem;
                }
                li { margin-bottom: 0.25rem; }
                p { margin-bottom: 1rem; }
                a { color: #0b74c9; }
                .bg-gray-50 { 
                  background-color: #f9fafb; 
                  padding: 1rem; 
                  border-radius: 0.5rem; 
                  border: 1px solid #e5e7eb;
                }
              </style>
            </head>
            <body>
              <h1>Non-Disclosure Agreement - Upskwela</h1>
              ${content.innerHTML}
            </body>
          </html>
        `);
        iframeDoc.close();

        // Wait for content to load, then print
        setTimeout(() => {
          iframe.contentWindow?.print();
          // Clean up after a delay
          setTimeout(() => {
            document.body.removeChild(iframe);
          }, 1000);
        }, 500);
      }
    }
  };

  const handleDownload = () => {
    const content = document.getElementById('nda-content');
    if (content) {
      const text = content.innerText;
      const blob = new Blob([`Non-Disclosure Agreement - Upskwela\n\n${text}`], {
        type: 'text/plain',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'upskwela-nda.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleAccept = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add a small delay to ensure the event is fully processed
    setTimeout(() => {
      // Call the onAccept callback
      onAccept();
    }, 50);
  };

  const handleDecline = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add a small delay to ensure the event is fully processed
    setTimeout(() => {
      // Close the modal
      onOpenChange(false);
    }, 50);
  };

  // Prevent the modal from closing when clicking inside the content
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[95vw] max-w-2xl h-[90vh] max-h-[90vh] flex flex-col p-0 sm:p-0 md:w-[85vw] md:max-w-3xl lg:w-[80vw] lg:max-w-4xl xl:w-[75vw] xl:max-w-5xl"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-full max-h-full" onClick={handleContentClick}>
          <DialogHeader className="flex-shrink-0 pb-3 sm:pb-4 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6">
            <DialogTitle className="text-base font-bold text-sky-600/90 dark:text-sky-400/90 sm:text-lg md:text-xl lg:text-2xl">
              Non-Disclosure Agreement
            </DialogTitle>
            <p className="text-sky-500/80 dark:text-sky-300/80 text-xs sm:text-sm md:text-base">
              Please read this agreement carefully before proceeding with registration.
            </p>
          </DialogHeader>

          <div
            className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-4 md:px-6 lg:px-8"
            id="nda-content"
          >
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-sm md:text-base leading-relaxed pb-4 max-w-none lg:max-w-3xl xl:max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  1. Introduction and Definitions
                </h3>
                <p>
                  This Non-Disclosure Agreement (&ldquo;Agreement&rdquo;) is entered into between
                  Upskwela (&ldquo;Platform&rdquo;) and the user (&ldquo;User&rdquo;) who registers
                  for an account on our community-based learning platform.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  2. Scope of Agreement
                </h3>
                <p>
                  This Agreement applies to all information, content, and materials accessed through
                  the Upskwela platform, including but not limited to course materials,
                  user-generated content, community discussions, and personal information of other
                  users.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  3. Confidential Information Definition
                </h3>
                <p>Confidential Information includes:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2 sm:ml-4 md:ml-6">
                  <li>Course content, materials, and educational resources</li>
                  <li>Personal information of other community creators and members</li>
                  <li>Proprietary teaching methods and techniques</li>
                  <li>Community discussions and interactions</li>
                  <li>Platform features and functionalities not publicly available</li>
                  <li>Any information marked as confidential</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  4. User Obligations
                </h3>
                <p>As a user of Upskwela, you agree to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2 sm:ml-4 md:ml-6">
                  <li>Maintain the confidentiality of all Confidential Information</li>
                  <li>Not share, distribute, or reproduce course materials without permission</li>
                  <li>Respect the privacy and personal information of other users</li>
                  <li>Use the platform solely for educational purposes</li>
                  <li>Not use Confidential Information for commercial purposes</li>
                  <li>Report any unauthorized disclosure immediately</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  5. Permitted Uses
                </h3>
                <p>You may use Confidential Information solely for:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2 sm:ml-4 md:ml-6">
                  <li>Personal educational development</li>
                  <li>Participating in course activities and assignments</li>
                  <li>Engaging in community discussions within the platform</li>
                  <li>Completing learning objectives as intended by course instructors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  6. Intellectual Property Rights
                </h3>
                <p>
                  All intellectual property rights in the course materials and platform content
                  remain with their respective owners. This Agreement does not grant you any
                  ownership rights to any confidential information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  7. Data Protection and Privacy
                </h3>
                <p>
                  We are committed to protecting your personal data. By using our platform, you
                  acknowledge that:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2 sm:ml-4 md:ml-6">
                  <li>
                    Your personal information will be processed in accordance with our Privacy
                    Policy
                  </li>
                  <li>You will not misuse other users&apos; personal information</li>
                  <li>
                    You consent to necessary data sharing for educational purposes within the
                    platform
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  8. Community Guidelines
                </h3>
                <p>
                  This Agreement works in conjunction with our Community Guidelines. You agree to
                  maintain a respectful, inclusive, and supportive learning environment for all
                  users.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  9. Termination
                </h3>
                <p>
                  Your confidentiality obligations will survive the termination of your account
                  based on the merits of your actions within the platform. This will be subject for
                  review and will be decided within the right process.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  10. Disclaimer and Limitations
                </h3>
                <p>
                  The Platform is provided &ldquo;as is&rdquo; without warranties of any kind. We
                  are not liable for any indirect, incidental, or consequential damages arising from
                  your use of the platform or breach of this Agreement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  11. Governing Law
                </h3>
                <p>
                  This Agreement shall be governed by and construed in accordance with the laws of
                  the Philippines, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-2 sm:text-base md:text-lg lg:text-xl">
                  12. Contact Information
                </h3>
                <p>If you have any questions about this Agreement, please contact us at:</p>
                <p className="mt-2">
                  Email:{' '}
                  <a
                    href="mailto:hello@upskwela.com"
                    className="text-sky-600 hover:text-sky-700 underline"
                  >
                    hello@upskwela.com
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg sm:p-4 md:p-6">
                <p className="text-center font-medium text-xs sm:text-sm md:text-base">
                  By registering for an account, you acknowledge that you have read, understood, and
                  agree to be bound by this Non-Disclosure Agreement.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center pt-3 sm:pt-4 md:pt-6 border-t px-3 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 md:pb-6">
            {/* Primary Action Buttons - Mobile: Full Width, Desktop: Right Side */}
            <div className="flex gap-2 justify-center sm:justify-end order-1 sm:order-2 w-full sm:w-auto">
              <Button
                type="button"
                variant="secondary"
                onClick={handleDecline}
                onTouchEnd={handleDecline}
                className="h-11 px-4 text-sm font-medium flex-1 sm:flex-none gap-2 min-w-[120px] sm:min-w-[100px]"
                aria-label="Decline and close NDA modal"
              >
                <X className="h-4 w-4 flex-shrink-0" />
                <span>Decline</span>
              </Button>
              <Button
                type="button"
                variant="brand"
                onClick={handleAccept}
                onTouchEnd={handleAccept}
                className="h-11 px-4 text-sm font-medium flex-1 sm:flex-none gap-2 min-w-[120px] sm:min-w-[140px]"
                aria-label="Agree to NDA and continue registration"
              >
                <Check className="h-4 w-4 flex-shrink-0" />
                <span>Agree</span>
              </Button>
            </div>

            {/* Secondary Action Buttons - Mobile: Full Width, Desktop: Left Side */}
            <div className="flex gap-2 justify-center sm:justify-start order-2 sm:order-1 w-full sm:w-auto">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handlePrint}
                onTouchEnd={handlePrint}
                className="h-9 px-3 text-xs font-medium flex-1 sm:flex-none gap-2 min-w-[100px] sm:min-w-[80px]"
                aria-label="Print NDA document"
              >
                <Printer className="h-4 w-4 flex-shrink-0" />
                <span>Print</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleDownload}
                onTouchEnd={handleDownload}
                className="h-9 px-3 text-xs font-medium flex-1 sm:flex-none gap-2 min-w-[100px] sm:min-w-[80px]"
                aria-label="Download NDA as text file"
              >
                <Download className="h-4 w-4 flex-shrink-0" />
                <span>Download</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
