import os
import zipfile

def zip_project(output_filename='project_upload.zip'):
    # Folders to exclude
    EXCLUDE_DIRS = {
        'node_modules', 
        '.next', 
        '.venv', 
        '.git', 
        '__pycache__', 
        '.vscode',
        'coverage',
        'dist',
        'build'
    }
    
    # Files to exclude
    EXCLUDE_FILES = {
        output_filename,
        '.DS_Store',
        'package-lock.json', # Optional: include if you want to debug dependency versions
        'yarn.lock',
        'pnpm-lock.yaml'
    }

    cwd = os.getcwd()
    print(f"Zipping project in: {cwd}")
    print(f"Excluding folders: {', '.join(EXCLUDE_DIRS)}")

    with zipfile.ZipFile(output_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(cwd):
            # Modify dirs in-place to skip excluded directories
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            
            for file in files:
                if file in EXCLUDE_FILES:
                    continue
                
                if file.endswith('.pyc'):
                    continue

                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, cwd)
                
                # Avoid zipping the script itself if it's in the root
                if os.path.basename(__file__) == file:
                    continue

                print(f"Adding: {arcname}")
                zipf.write(file_path, arcname)

    print(f"\nDone! Created {output_filename}")

if __name__ == '__main__':
    zip_project()
